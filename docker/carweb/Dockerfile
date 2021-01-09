FROM node:12.8-alpine

ENV APP_ROOT /app
WORKDIR $APP_ROOT/carweb/

COPY ./carweb/package.json $APP_ROOT/carweb/
COPY ./carweb/package-lock.json $APP_ROOT/carweb/
RUN npm install

COPY ./carweb/dist $APP_ROOT/carweb/dist