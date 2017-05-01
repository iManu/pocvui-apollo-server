# POCvui server

This server is used for data of **pocvui** repo

This is a really simple GraphQL server that uses [Apollo Server](https://github.com/apollostack/apollo-server) and [GraphQL Tools](https://github.com/apollostack/graphql-tools) to serve a simple schema.

It uses a very simple in-memory database, so if you restart the server or change the code, the data will reset.

## Installation

run `npm install`

```
npm install
```

## Starting the server

```
npm start
```

The server will run on port 8999. You can change this by editing `server.js`.
