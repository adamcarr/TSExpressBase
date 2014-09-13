/// <reference path="../../declarations/express/express.d.ts" />
import express = require('express');

export interface IMiddlewareBinder {
  bind(app:express.Application): void;
}