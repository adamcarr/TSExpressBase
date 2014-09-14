/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import RouteContracts = require('../routes/Contracts');

class BaseController {
  constructor(
    public requestParamHandlerBindings: RouteContracts.IRouteRequestParamHandlerBinding[] = []
    ) {

  }
}