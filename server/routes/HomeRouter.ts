/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import MiddlewareContracts = require('../middleware/Contracts');
import ControllerContracts = require('../controllers/Contracts');
import RouteContracts = require('./Contracts');
import Router = require('./Router');
import homeController = require('../controllers/Home');

var expressRouter = express.Router();
var router = new Router(expressRouter, '/home', 'home');

homeController.requestParamHandlerBindings.forEach(router.bindRequestParamHandlerBinding);

router.registerRequestRouteHandler({
  route: '/index',
  verb: RouteContracts.Verbs.get,
  handler: homeController.actions['index'],
  metadata: {
    summary: 'The home controler index action',
    statuses: {
      '200': 'Successful request',
      '404': 'Page not found'
    }
  }
});

router.registerRequestRouteHandler({
  route: '/json',
  verb: RouteContracts.Verbs.get,
  handler: homeController.actions['json']
});

router.registerRequestRouteHandler({
  route: '/post',
  verb: RouteContracts.Verbs.post,
  handler: homeController.actions['post'],
  metadata: {
    summary: 'Endpoint that just passes back whatever you send it assuming you send JSON',
    statuses: {
      '200': 'Success',
      '500': 'Something went wrong on the server. You probably sent in something other than valid JSON.'
    },
    request: {
      'name': 'Adam Carr',
      'age': 'None of your business',
      'isMale': true,
      likes: [
        'typescript', 'nodejs', 'women'
      ]
    },
    response: {
      'name': 'Adam Carr',
      'age': 'None of your business',
      'isMale': true,
      likes: [
        'typescript', 'nodejs', 'women'
      ]
    }
  }
});

export = router;

