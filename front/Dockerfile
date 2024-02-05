FROM node:20-buster-slim AS Front
WORKDIR /app

COPY package*.json .

# Install app dependencies
RUN npm install

COPY * .

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs