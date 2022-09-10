import {Request, Response} from 'express';

import Lib from 'lib';

export type Headers = {requestedBy: string};
export type HeadersOpt = {[key in keyof Headers]?: string};

export interface Context {
  req: Request;
  res: Response;
  headers: HeadersOpt;
  lib: Lib;
}
