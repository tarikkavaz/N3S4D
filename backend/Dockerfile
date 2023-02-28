FROM node:14.19.1
WORKDIR /app/backend
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 1337
CMD ["yarn", "start"]
