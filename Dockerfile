FROM ubuntu:latest
RUN apt-get update && apt-get install -y curl graphicsmagick gnupg && apt-get clean
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get update && apt-get install -y nodejs && apt-get clean
EXPOSE 8080
COPY . /app
WORKDIR /app
RUN npm install
CMD npm start
