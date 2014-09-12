/// <reference path="../../declarations/express/express.d.ts" />
import express = require('express');

/**
 * The {{#crossLink "MiddlewareManager"}}{{/crossLink}} class is used to register and bootstrap express middleware.
 * @class MiddlewareManager
 */
class MiddlewareManager {
    /**
     * Ordered array of middleware.
     * @property {string} middleware
     */
    public middleware: express.RequestHandler[];

    /**
     * Creates a new instance of {{#crossLink "MiddlewareManager"}}{{/crossLink}}
     *
     * @constructor
     * @param middleware {express.RequestHandler[]}
     */
    constructor(middleware?: express.RequestHandler[]) {
        this.middleware = middleware;
    }

    /**
     * Bootstraps the provided express application with the registered middleware.
     *
     * @method bootstrap
     * @param app {express.Application} The express application to bootstrap with registered middleware.
     * @returns {express.Application} The passed in express application.
     */
    public bootstrap(app: express.Application): express.Application {
        this.middleware.forEach((middleware) => {
            app.use(middleware);
        })

        return app;
    }
}

export = MiddlewareManager;