FROM node:16 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate --schema=./src/4-framework/models/prisma/schema.prisma


# FROM base as production

# ENV NODE_PATH=./build

# RUN npm run build
