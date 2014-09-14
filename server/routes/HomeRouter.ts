/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');
import RouteContracts = require('./Contracts');
import BaseRouter = require('./BaseRouter');
import homeController = require('../controllers/Home');

var homeRouterBinder: RouteContracts.IRouterBinder = function (app: express.Application): void {
  var expressRouter = express.Router();
  var router = new BaseRouter(expressRouter, '/home', app, [], homeController.requestParamHandlerBindings);

  router.registerRequestRouteHandler({
    route: '/index',
    verb: RouteContracts.Verbs.get,
    handler: homeController.actions['index']
  });
  
  router.registerRequestRouteHandler({
    route: '/json',
    verb: RouteContracts.Verbs.get,
    handler: homeController.actions['json']
  });
  
  router.registerRequestRouteHandler({
    route: '/post',
    verb: RouteContracts.Verbs.post,
    handler: homeController.actions['post']
  });
};

export = homeRouterBinder;

