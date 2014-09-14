/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import Middleware = require('./middleware/index');
import routes = require('./routes/index');

var app = express();

Middleware.bootstrap(app);
routes.bootstrap(app);

//app.get('/', function(req, res){
//  res.locals = {
//    title: 'TSExpressBase'
//  };
//
//  res.render('index');
//});

var server = app.listen(process.env.port || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});