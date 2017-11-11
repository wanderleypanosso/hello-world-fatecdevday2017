# ========================== Base Image ==========================
FROM alpine:3.4 AS base

LABEL maintainer="wanderley.panosso@gmail.com"

RUN apk add --no-cache nodejs


# ========================== Build Image =======================
FROM base AS builder

RUN mkdir -p /hello-world

COPY ./package.json /hello-world/package.json

WORKDIR /hello-world

RUN npm install --production

COPY ./src /hello-world/src


# ========================== Build Image =======================
FROM base AS runtime

RUN apk add --no-cache curl

COPY --from=builder /hello-world /hello-world

WORKDIR /hello-world

HEALTHCHECK --start-period=10s --interval=10s --timeout=1s --retries=3 \
  CMD curl -f http://127.0.0.1:3000/health || exit 1

EXPOSE 3000

ENTRYPOINT npm start
