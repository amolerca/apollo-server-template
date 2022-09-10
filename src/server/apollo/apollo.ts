import {ContextFunction} from 'apollo-server-core';
import {ApolloServer, ExpressContext} from 'apollo-server-express';
import {GraphQLSchema} from 'graphql';

import {Context} from './context/types';

async function apollo(
  schema: GraphQLSchema,
  context: ContextFunction<ExpressContext, Context>
): Promise<ApolloServer> {
  const apollo = new ApolloServer({schema, context});
  await apollo.start();

  return apollo;
}

export default apollo;
