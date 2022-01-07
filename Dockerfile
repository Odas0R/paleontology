FROM node:alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]