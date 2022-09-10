import apolloLoader from './apollo';

import {path} from 'config/server';
import Lib from 'lib';
import server from 'server';

async function serverLoader(lib: Lib) {
  console.log('Loading server ⏳');
  const apollo = await apolloLoader(lib);

  return server(apollo, {path});
}

export default serverLoader;
