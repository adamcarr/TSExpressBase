/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import BaseRouter = require('./BaseRouter');
import RouteContracts = require('./Contracts');
import homeRouterBinder = require('./HomeRouter');

var routerBinders: RouteContracts.IRouterBinder[] = [
  homeRouterBinder
];

export function bootstrap(app: express.Application): void{
  routerBinders.forEach((router: RouteContracts.IRouterBinder) => {
    router(app);
  })
}