FROM ubuntu:latest
RUN apt-get update && apt-get -y install curl gnupg && apt-get clean
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get update && apt-get install -y nodejs && apt-get clean
WORKDIR /app
COPY . /app
RUN npm install
CMD npm start
