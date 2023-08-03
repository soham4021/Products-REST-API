

# Title and Description

#### Product Search API using Node.js, Express.js, and MongoDB

This repository contains a powerful and efficient RESTful API built with Node.js, Express.js, and MongoDB, designed to fetch products based on diverse search parameters in the request query. With a robust backend and seamless integration with MongoDB, the API delivers lightning-fast responses to queries, making it ideal for e-commerce applications and product catalogs.


## API Reference

#### Get all items

```http
  GET /api/products
```

#### Get item

```http
  GET /api/products?id=product_id
```
#### Test search : To test any route

```http
  GET /api/products/test
```

#### Sort search results

```http
  GET /api/products?sort=parameter1,parameter2,...
```
   


## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`MONGO_URI` : Your MongoDB connection string


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd REST_API_NODE_JS
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```



Start the server

```bash
  npm run dev
```
