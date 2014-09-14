/// <reference path="../../declarations/express/express.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');
import RouteContracts = require('./Contracts');
import BaseRouter = require('./BaseRouter');
import homeController = require('../controllers/Home');

var homeRouterBinder: RouteContracts.IRouterBinder = function (app: express.Application): void {
  var expressRouter = express.Router();
  var router = new BaseRouter(expressRouter, '/', app, [], homeController.requestParamHandlerBindings);

  router.registerRequestRouteHandler({
    route: '',
    verb: RouteContracts.VERBS.GET,
    handler: homeController.actions['index']
  });
};

export = homeRouterBinder;

