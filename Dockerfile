FROM node:18-alpine AS base

RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

FROM base AS builder


WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

EXPOSE 3000

CMD pnpm start
