/// <reference path="../../declarations/express/express.d.ts" />

import express = require('express');
import MiddlewareContracts = require('./Contracts');
import expressMiddlewareBinder = require('./applicationMiddleware/ExpressMiddlewareBinder');
import hoganMiddlewareBinder = require('./applicationMiddleware/HoganMiddlewareBinder');

var binders: MiddlewareContracts.IMiddlewareBinder<express.Application>[] = [
  expressMiddlewareBinder,
  hoganMiddlewareBinder
];

export function bootstrap(app: express.Application): void {
  binders.forEach((binder) => {
    binder.bind(app);
  })
}