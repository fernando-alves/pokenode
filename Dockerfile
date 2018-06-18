FROM ubuntu:latest
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
