import {GraphQLSchema, specifiedDirectives} from 'graphql';
import {BuildSchemaOptions, buildSchemaSync} from 'type-graphql';

function schema(options: BuildSchemaOptions): GraphQLSchema {
  const schema = buildSchemaSync({
    ...options,
    directives: [...specifiedDirectives, ...(options.directives || [])],
  });

  return schema;
}

export default schema;
