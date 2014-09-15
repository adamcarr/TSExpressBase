/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import ControllerContracts = require('./Contracts');

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

controller.actions['json'] = function (req: express.Request, res: express.Response): void {
  res.status(200).send({success: true});
}

controller.actions['post'] = function (req: express.Request, res: express.Response): void {
  console.log(req.body);
  res.status(200).send(req.body);
}

export = controller;