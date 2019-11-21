# build
FROM node:12.8.0-alpine AS movies-app
LABEL version="1.0"
LABEL description="movies-search"
WORKDIR /app
COPY ./package.json .
RUN  npm cache clean --force && npm install
COPY . .
RUN npm run build

# run prod
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=movies-app /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

