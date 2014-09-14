/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');

export enum Verbs {
  all, get, put, post, delete, patch, options
}

export interface IRequestRouteHandlerOptions {
  route: string;
  handler: express.RequestHandler;
  verb: Verbs;
}

export interface IViewRequestRouteHandlerOptions extends IRequestRouteHandlerOptions {
  layout?: string;
  view: string;
}

export interface IRouteRequestParamHandlerBinding {
  paramName: string;
  requestParamHandler: express.RequestParamHandler;
}

export interface IRouterBinder {
  (app: express.Application): void;
}