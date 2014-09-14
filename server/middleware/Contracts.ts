/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');

export interface IMiddlewareBinder<T> {
  bind(app: T): void;
}