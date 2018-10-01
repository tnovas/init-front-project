FROM node:latest

ADD ./ /
WORKDIR /build

CMD [ "node", "server.js" ]

EXPOSE 8001