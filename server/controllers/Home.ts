/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import ControllerContracts = require('./Contracts');
import HomeViewModels = require('../viewModels/Home');

var controller: ControllerContracts.IController = {
  requestParamHandlerBindings: [],
  actions: { }
};

controller.actions['index'] = function (req: express.Request, res: express.Response): void {
  res.locals = {
    title: 'TSExpressBase - With Controllers!'
  };

  res.render('home-index');
};

export = controller;