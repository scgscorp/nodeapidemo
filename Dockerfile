ARG NODE_VERSION=16-alpine
FROM node:${NODE_VERSION}
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 3000

RUN npm run build
CMD ["node", "dist/app.js"]