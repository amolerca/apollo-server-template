import {ApolloServer} from 'apollo-server-express';
import express from 'express';

function server(apollo: ApolloServer, config: {path: string}) {
  const server = express();
  apollo.applyMiddleware({app: server, path: config.path});

  return server;
}

export default server;
