import contextLoader from './context';
import schemaLoader from './schema';

import Lib from 'lib';
import apollo from 'server/apollo';

function apolloLoader(lib: Lib) {
  const schema = schemaLoader();
  const context = contextLoader(lib);

  return apollo(schema, context);
}

export default apolloLoader;
