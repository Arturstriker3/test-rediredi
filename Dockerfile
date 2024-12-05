FROM node:18 AS build-stage

WORKDIR /app

COPY package*.json /app/
COPY . /app/

RUN npm install pnpm -g
RUN pnpm install

# Install typescript older version to avoid error
RUN pnpm add typescript@5.2.2

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN pnpm build

FROM nginx:1.21-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
