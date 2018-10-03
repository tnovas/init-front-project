FROM node:latest

ADD ./build /
WORKDIR /

CMD [ "node", "server.js" ]

EXPOSE 8001