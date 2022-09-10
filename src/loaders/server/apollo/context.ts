import {ContextFunction} from 'apollo-server-core';
import {ExpressContext} from 'apollo-server-express';

import Lib from 'lib';
import context from 'server/apollo/context';
import {Context} from 'server/apollo/context/types';

function contextLoader(lib: Lib): ContextFunction<ExpressContext, Context> {
  return context({requestedBy: 'x-requested-by'}, lib);
}

export default contextLoader;
