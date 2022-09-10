import {NonEmptyArray} from 'type-graphql';

import {DefaultResolver} from './default';

const resolvers: NonEmptyArray<Function> = [DefaultResolver];

export default resolvers;
