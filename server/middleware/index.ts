/// <reference path="../../declarations/express/express.d.ts" />

import express = require('express');
import MiddlewareContracts = require('./Contracts');
import expressMiddlewareBinder = require('./ExpressMiddlewareBinder');

var binders: MiddlewareContracts.IMiddlewareBinder[] = [
  expressMiddlewareBinder
];

export function bootstrap(app: express.Application): void {
  binders.forEach((binder) => {
    binder.bind(app);
  })
}