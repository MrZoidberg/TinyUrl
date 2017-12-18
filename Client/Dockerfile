FROM node:8-alpine as builder

VOLUME /src
WORKDIR /src

RUN npm install -g gulp

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . .

RUN chmod +x /src/build.sh && sh /src/build.sh
RUN cd dist && ls -lia && pwd

FROM nginx:1.13-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /src/dist/ /usr/share/nginx/html

RUN cd /usr/share/nginx/html && ls -lia

COPY nginx_conf/website.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
