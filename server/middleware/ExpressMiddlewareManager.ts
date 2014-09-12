/// <reference path="../../declarations/express/express.d.ts" />
/// <reference path="../../declarations/body-parser/body-parser.d.ts" />
/// <reference path="../../declarations/method-override/method-override.d.ts" />

import express = require('express');
import MiddlwareManager = require('./MiddlewareManager');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/**
 * 
 *
 * @type {MiddlewareManager}
 */
var expressMiddlewareManager = new MiddlewareManager([bodyParser(), methodOverride()]);

export = expressMiddlewareManager;