import {ContextFunction} from 'apollo-server-core';
import {ExpressContext} from 'apollo-server-express';

import {Context, Headers, HeadersOpt} from './types';

import Lib from 'lib';

function context(
  headersN: Headers,
  lib: Lib
): ContextFunction<ExpressContext, Context> {
  return ({req, res}) => {
    const headers = Object.entries(headersN).reduce(
      (result: HeadersOpt, [headerK, headerName]) => {
        const headerV = req.headers[headerName];
        if (headerV && typeof headerV !== 'string') {
          throw new Error(`Invalid ${headerName} header.`);
        }
        result[headerK as keyof Headers] = headerV;

        return result;
      },
      {}
    );

    return {req, res, headers, lib};
  };
}

export default context;
