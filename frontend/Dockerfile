FROM node:14.19.1
ENV NODE_ENV production
WORKDIR /app/frontend
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "prod"]