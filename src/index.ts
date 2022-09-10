import 'reflect-metadata';

import {port} from 'config/env';
import serverLoader from 'loaders/server';
import libLoader from 'loaders/lib';

async function main() {
  const lib = await libLoader();
  const sever = await serverLoader(lib);

  sever.listen({port}, () => {
    console.log(`Server ready at http://app.localhost:${port}/ 🚀`);
  });
}

main();
