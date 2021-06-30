FROM node:14-alpine3.13

ENV NODE_ENV=production
ENV PORT=80

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

# Fix service error
RUN node node_modules/esbuild/install.js

RUN npm run build

EXPOSE 80

CMD ["node", "dist/app.js"]
