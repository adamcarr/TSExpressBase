/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import ControllerContracts = require('./Contracts');
import Routes = require('../routes/index');
import RouteContracts = require('../routes/Contracts');
var _ : _.LoDashStatic = require('lodash');

var controller: ControllerContracts.IController = {
	requestParamHandlerBindings: [],
	actions: { }
};

controller.actions['index'] = function (req: express.Request, res: express.Response): void {
	var apiMetadata = {};
	Routes.routers.forEach((router: RouteContracts.IRouter) => {
		if (router.routerName) {
			var routerMetadata = {};
			router.requestRouteHandlerOptions.forEach((requestRouteHandlerOptions) => {
				if (requestRouteHandlerOptions.metadata) {
					var routeMetadata = routerMetadata[router.baseRoute + requestRouteHandlerOptions.route] = {};
					routeMetadata['method'] = RouteContracts.Verbs[requestRouteHandlerOptions.verb];
					_.assign(routeMetadata, requestRouteHandlerOptions.metadata);
				}
			});
			
			if (!_.isEmpty(routerMetadata)) {
				apiMetadata[router.routerName] = routerMetadata;
			}
		}
	});
	
	res.status(200).contentType('application/json').send(apiMetadata);
}

export = controller;