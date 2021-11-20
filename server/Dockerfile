# Specify base img
FROM node:14.17.5-alpine3.14

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]