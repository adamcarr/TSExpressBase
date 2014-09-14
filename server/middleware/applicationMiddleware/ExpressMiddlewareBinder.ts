/// <reference path="../../../declarations/express/express.d.ts" />

import express = require('express');
import MiddlewareContracts = require('../Contracts');

var expressMiddlewareBinder: MiddlewareContracts.IMiddlewareBinder<express.Application> = {
  bind: function (app: express.Application): void {
  }
}

export = expressMiddlewareBinder;