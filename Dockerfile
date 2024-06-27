FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install vite

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install -g http-server
EXPOSE 8080
CMD ["http-server", "dist"]