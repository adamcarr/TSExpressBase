/// <reference path="../../../typings/tsd.d.ts" />
import express = require('express');
import bodyParser = require('body-parser');
import MiddlewareContracts = require('../Contracts');

var expressMiddlewareBinder: MiddlewareContracts.IMiddlewareBinder<express.Application> = {
  bind: function (app: express.Application): void {
    app.use(bodyParser.json());
    app.use('/static', express.static(__dirname + '/../../../client'));
  }
}

export = expressMiddlewareBinder;
