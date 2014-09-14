/// <reference path="../../../typings/tsd.d.ts" />

import express = require('express');
import MiddlewareContracts = require('../Contracts');

var hoganMiddlewareBinder: MiddlewareContracts.IMiddlewareBinder<express.Application> = {
  bind: function (app: express.Application): void {
    app.set('view engine', 'html');
    app.set('layout', 'layout');
    app.set('views', __dirname + '/../../views')
    app.enable('view cache');
    app.engine('html', require('hogan-express'));
  }
}

export = hoganMiddlewareBinder;
