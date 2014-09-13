/// <reference path="../../declarations/express/express.d.ts" />
import express = require('express');

/**
 * The {{#crossLink "IMiddlewareBinder"}}{{/crossLink}} interface defines basic api for binding middleware to an
 * express application.
 *
 * @interface IMiddlewareBinder
 */
export interface IMiddlewareBinder {
  /**
   * Binds the middleware contained in this {{#crossLink "IMiddlewareBinder"}}{{/crossLink}} to the provided express application instance.
   * @method bind
   * @param app {express.Application} The express application instance to bind the middleware to.
   * @returns {express.Application} The provided express application instance.
   */
  bind(app: express.Application): express.Application;
}