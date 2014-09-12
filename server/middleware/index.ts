/// <reference path="../../declarations/express/express.d.ts" />

import express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/**
 * Provides api to wire up middleware
 *
 * @module Middleware
 */
module Middleware {
    export function bootstrap(app: express.Application): express.Application {
        app.use(bodyParser());
        app.use(methodOverride());

        return app;
    }
}

export = Middleware;