/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import RouteContracts = require('./Contracts');
import Router = require('./Router');
import apiMetadataController = require('../controllers/ApiMetadata');

var expressRouter = express.Router();
var router = new Router(expressRouter, '/apimetadata', 'apimetadata');

apiMetadataController.requestParamHandlerBindings.forEach(router.bindRequestParamHandlerBinding);

router.registerRequestRouteHandler({
  route: '',
  verb: RouteContracts.Verbs.get,
  handler: apiMetadataController.actions['index']
});

export = router;

