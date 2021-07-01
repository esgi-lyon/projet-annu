FROM node:14-alpine3.13

ENV NODE_ENV=production
ENV PORT=80

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

# Fix service error
RUN node node_modules/esbuild/install.js || true

RUN npm run build

RUN ls dist

EXPOSE 80

CMD ["node", "dist/app.js"]
