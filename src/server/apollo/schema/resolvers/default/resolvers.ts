import {
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from 'type-graphql';

import {BaseDefault, Default} from './types';

@Resolver(() => Default)
class DefaultResolver implements ResolverInterface<Default> {
  @FieldResolver(() => String)
  async name(@Root() {id}: BaseDefault): Promise<string> {
    return `default-${id}`;
  }

  @Query(() => Default)
  async getDefault(): Promise<BaseDefault> {
    return {id: 0};
  }
}

export {DefaultResolver};
