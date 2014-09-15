/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import RouteContracts = require('./Contracts');
import homeRouter = require('./HomeRouter');
import apiMetadataRouter = require('./ApiMetadata');

export var routers: RouteContracts.IRouter[] = [
  homeRouter,
  apiMetadataRouter
];

export function bootstrap(app: express.Application): void{
  routers.forEach((router: RouteContracts.IRouter) => {
    router.bindToApp(app);
  })
}