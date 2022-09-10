import {GraphQLSchema} from 'graphql';
import {emitSchemaDefinitionFileSync} from 'type-graphql';

import {emitSchemaFile} from 'config/server/schema';
import schema from 'server/apollo/schema';
import resolvers from 'server/apollo/schema/resolvers';

function schemaLoader(): GraphQLSchema {
  const finalSchema = schema({resolvers});
  emitSchemaDefinitionFileSync(emitSchemaFile, finalSchema);

  return finalSchema;
}

export default schemaLoader;
