/// <reference path="../../declarations/express/express.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');
import RouteContracts = require('./Contracts');

class BaseRouter {
  public requestRouteHandlerOptions: RouteContracts.IRequestRouteHandlerOptions[] = [];

  constructor(
    public router: express.Router,
    public baseRoute: string,
    app: express.Application,
    middlewareBinders: MiddlewareContracts.IMiddlewareBinder<express.IRouter<express.Router>>[] = [],
    routeRequestParamHandlerBindings: RouteContracts.IRouteRequestParamHandlerBinding[] = []
    ) {
    app.use(this.baseRoute, this.router);

    if (middlewareBinders.length > 0) {
      middlewareBinders.forEach(this.bindMiddleware);
    }

    if (routeRequestParamHandlerBindings.length > 0) {
      routeRequestParamHandlerBindings.forEach(this.bindRequestParamHandlerBinding);
    }
  }

  public bindMiddleware(
    middlewareBinder: MiddlewareContracts.IMiddlewareBinder<express.IRouter<express.Router>>): void {
    middlewareBinder.bind(this.router);
  }

  public bindRequestParamHandlerBinding(
    routeRequestParamBinding: RouteContracts.IRouteRequestParamHandlerBinding): void {
    this.router.param(routeRequestParamBinding.paramName, routeRequestParamBinding.requestParamHandler);
  }

  public registerRequestRouteHandler(
    requestRouteHandlerOptions: RouteContracts.IRequestRouteHandlerOptions): void {
    this.requestRouteHandlerOptions.push(requestRouteHandlerOptions);
    switch (requestRouteHandlerOptions.verb) {
      case RouteContracts.VERBS.ALL:
        this.router.all(requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
        break;
      case RouteContracts.VERBS.GET:
        this.router.get(requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
        break;
      case RouteContracts.VERBS.PUT:
        this.router.put(requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
        break;
      case RouteContracts.VERBS.POST:
        this.router.post(requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
        break;
      case RouteContracts.VERBS.DELETE:
        this.router.delete(requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
        break;
      case RouteContracts.VERBS.PATCH:
        this.router.patch(requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
        break;
      case RouteContracts.VERBS.OPTIONS:
        this.router.options(requestRouteHandlerOptions.route, requestRouteHandlerOptions.handler);
        break;
    }
  }
}

export = BaseRouter;