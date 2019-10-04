# Shopping Cart

This is a sample app built with Express and MongoDB running on Docker following the tutorial below.

[![Video](https://i.ytimg.com/vi/Kyx2PsuwomE/mqdefault.jpg)](https://www.youtube.com/watch?v=Kyx2PsuwomE)

## Stack

- Docker
- Node.js
- Express
- MongoDB
- ejs

## Getting Started

Follow these steps to get the app up and running.

1. Install the Node.js dependencies.

```
npm install
```

2. Make a copy of `.env.example` to `.env.development` and update the credentials.

3. Start the server in development mode.

```sh
npm run dev
```

## Production

Follow these steps to run the app in production.

1. Make a copy of `.env.example` to `.env.production` and update the credentials.

2. Create the docker container.

```sh
docker-compose up
```

## Docker Commands

**Create or destroy the docker container**

```sh
docker-compose up
docker-compose down
```

**Start or stop the web app**

```sh
docker container start shopping-cart-web
docker container stop shopping-cart-web
```

**Start or stop the database**

```sh
docker container start shopping-cart-db
docker container stop shopping-cart-db
```
