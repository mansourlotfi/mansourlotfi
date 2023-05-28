FROM hub.hamdocker.ir/nginx:1.22.0
COPY ./out ./project
RUN rm ../etc/nginx/conf.d/default.conf
COPY ./nginx-configs ../etc/nginx/conf.d

# WORKDIR /app
# # Cache and Install dependencies
# COPY package.json .
# COPY yarn.lock .
# RUN yarn install --production
# # Copy app files
# COPY . .
# # Build the app
# RUN yarn next build

# # Bundle static assets with nginx
# # FROM nginx:1.21.0-alpine as production

# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Static build
# # COPY --from=builder /app/.next /usr/share/nginx/html/

# # Default port exposure
# EXPOSE 3000

# # Copy .env file and shell script to container
# # WORKDIR /usr/share/nginx/html
# # COPY ./env .
# COPY .env .

# # Start Nginx server
# # CMD ["nginx", "-g", "daemon off;"]
# CMD yarn start


