/// <reference path="../../declarations/express/express.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');

export enum VERBS {
  ALL, GET, PUT, POST, DELETE, PATCH, OPTIONS
}

export interface IRequestRouteHandlerOptions {
  route: string;
  handler: express.RequestHandler;
  verb: VERBS;
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