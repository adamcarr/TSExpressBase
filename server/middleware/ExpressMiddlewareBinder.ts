/// <reference path="../../declarations/express/express.d.ts" />
/// <reference path="../../declarations/body-parser/body-parser.d.ts" />
/// <reference path="../../declarations/method-override/method-override.d.ts" />

import express = require('express');
import MiddlewareContracts = require('./Contracts');
import bodyParser = require('body-parser');
import methodOverride = require('method-override');

var expressMiddlewareBinder: MiddlewareContracts.IMiddlewareBinder = {
  bind: function (app: express.Application): void {
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(app.router);
  }
}

export = expressMiddlewareBinder;
