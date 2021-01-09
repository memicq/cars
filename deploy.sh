#!/bin/sh -eu

<< DESCRIPTION
- carapi deployment
  - gradle build (jar file creation)
  - create docker image
  - docker push ecr
- carweb deployment
  - npm run build
  - create docker image
  - docker push ecr
DESCRIPTION

phase_comment() {
  echo "======================================="
  printf "=====< %30s\n" "$1"
  echo "======================================="
}

API_IMAGE_NAME="cars_carapi"
WEB_IMAGE_NAME="cars_carweb"

ECR_URL="742275979104.dkr.ecr.ap-northeast-1.amazonaws.com"
API_REPO_NAME="cars_api"
WEB_REPO_NAME="cars_web"

# =============================================================
phase_comment "BUILD APPLICATION"
# =============================================================
./gradlew clean build

# =============================================================
phase_comment "CREATE LOCAL IMAGE"
# =============================================================
# refresh
docker image rm -f $API_IMAGE_NAME $WEB_IMAGE_NAME
docker image rm -f $ECR_URL/$API_REPO_NAME
docker image rm -f $ECR_URL/$WEB_REPO_NAME
docker container prune
docker image prune
# creation
docker-compose build

# =============================================================
phase_comment "PUSH LOCAL IMAGE TO ECR"
# =============================================================
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin $ECR_URL
docker tag $API_IMAGE_NAME:latest $ECR_URL/$API_REPO_NAME:latest
docker push $ECR_URL/$API_REPO_NAME:latest
aws ecs update-service --force-new-deployment --cluster cars-cluster --service cars-service | cat
