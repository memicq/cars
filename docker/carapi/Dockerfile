FROM adoptopenjdk/openjdk11

ARG JAR_FILE=carapi/build/libs/*.jar
COPY ${JAR_FILE} app.jar
CMD ["java","-jar","/app.jar", "--spring.profiles.active=production"]