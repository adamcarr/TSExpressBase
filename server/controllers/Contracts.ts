/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import RouteContracts = require('../routes/Contracts');

export interface IControllerAction {
  (req: express.Request, res: express.Response, ...args: any[]): void;
}

export interface IControllerActions {
  [action: string]: IControllerAction;
}

export interface IController {
  requestParamHandlerBindings: RouteContracts.IRouteRequestParamHandlerBinding[];
  actions: IControllerActions;
}