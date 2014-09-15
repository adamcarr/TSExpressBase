/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');
import RouteContracts = require('./Contracts');

class Router implements RouteContracts.IRouter {
  public requestRouteHandlerOptions: RouteContracts.IRequestRouteHandlerOptions[] = [];

  constructor(public router: express.Router, public baseRoute: string, public routerName?: string) {
  }

  public bindMiddleware(
    middlewareBinder: MiddlewareContracts.IMiddlewareBinder<express.IRouter<express.Router>>): void {
    middlewareBinder.bind(this.router);
  }

  public bindRequestParamHandlerBinding(
    routeRequestParamBinding: RouteContracts.IRouteRequestParamHandlerBinding): void {
    this.router.param(routeRequestParamBinding.paramName, routeRequestParamBinding.requestParamHandler);
  }
  
  public registerRequestRouteHandler(requestRouteHandlerOptions: RouteContracts.IRequestRouteHandlerOptions): void {
    this.requestRouteHandlerOptions.push(requestRouteHandlerOptions);
  }

  public bindToApp(app: express.Application): void {
    app.use(this.baseRoute, this.router);
    
    this.requestRouteHandlerOptions.forEach((requestRouteHandlerOptions) => {
      var verb = RouteContracts.Verbs[requestRouteHandlerOptions.verb];
      this.router[verb](requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
    });
  }
}

export = Router;