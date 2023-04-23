FROM node:18.16-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.16-slim AS server
WORKDIR /app
ENV PORT $PORT
COPY package* ./
RUN npm install --production
COPY --from=builder ./app/build ./build
EXPOSE 3000
CMD ["npm", "start"]
