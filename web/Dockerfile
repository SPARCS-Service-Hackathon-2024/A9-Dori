FROM node:16-alpine

# Copy repository
WORKDIR /usr/src/app
COPY . .

# Install curl (for taxi-docker)
RUN apk update && apk add curl

RUN npm install --global pnpm@8.6.6 serve@14.1.2

# Install requirements
RUN pnpm install
# build
RUN pnpm run build

# serve
EXPOSE 80
CMD ["sh", "-c", "serve -s build -l 80"]
