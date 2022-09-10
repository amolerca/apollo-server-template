import * as dotenv from 'dotenv';

import {NodeEnv} from './types';

dotenv.config();

const port = parseInt(process.env.PORT as string);
const nodeEnv = process.env.NODE_ENV as NodeEnv;

export {port, nodeEnv};
