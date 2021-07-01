FROM node:14-alpine3.13

ENV NODE_ENV=production

WORKDIR /app

VOLUME ["/app/dist", "/app/node_modules", "/app/src"]

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

# Dist builded by host
COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/app.js"]
