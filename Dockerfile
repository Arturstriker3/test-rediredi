FROM node:18 as build-stage

WORKDIR /app

COPY package*.json /app/
COPY . /app/

RUN npm install pnpm -g
RUN pnpm install

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN pnpm build

FROM nginx:1.21-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
