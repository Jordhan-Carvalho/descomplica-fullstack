FROM node:14.17.5-alpine3.14 as build
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# production env
FROM nginx:stable-alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html