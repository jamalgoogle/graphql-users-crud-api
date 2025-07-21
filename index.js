const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer(){
   const app = express();

   const server = new ApolloServer({
    typeDefs,
    resolvers
   });

   await server.start();
   server.applyMiddleware({ app });

   const PORT = process.env.PORT || 4000;
   app.listen(PORT, () => 
      console.log(`Server is running on port ${PORT}`));
}

startServer();