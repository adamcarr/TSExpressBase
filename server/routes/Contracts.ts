/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');

export interface IRouter {
  router: express.Router;
  baseRoute: string;
  routerName?: string;
  requestRouteHandlerOptions: IRequestRouteHandlerOptions[];
  bindMiddleware: (middlewareBinder: MiddlewareContracts.IMiddlewareBinder<express.IRouter<express.Router>>) => void;
  bindRequestParamHandlerBinding: (routeRequestParamBinding: IRouteRequestParamHandlerBinding) => void;
  registerRequestRouteHandler: (requestRouteHandlerOptions: IRequestRouteHandlerOptions) => void;
  bindToApp: (app: express.Application) => void;
}

export enum Verbs {
  all, get, put, post, delete, patch, options
}

export interface IRequestRouteHandlerOptions {
  route: string;
  handler: express.RequestHandler;
  verb: Verbs;
  metadata?: IRouteMetadata;
}

export interface IViewRequestRouteHandlerOptions extends IRequestRouteHandlerOptions {
  layout?: string;
  view: string;
}

export interface IRouteRequestParamHandlerBinding {
  paramName: string;
  requestParamHandler: express.RequestParamHandler;
}

export interface IRouteHeaders {
  [header: string]: string;
}

export interface IRouteStatuses {
  [status: string]: string;
}

export interface IRouteMetadata {
  summary?: string;
  headers?: IRouteHeaders;
  request?: Object;
  response?: Object;
  statuses?: IRouteStatuses;
}