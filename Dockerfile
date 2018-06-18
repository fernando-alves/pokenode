FROM ubuntu:latest
RUN apt-get update && apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
