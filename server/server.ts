/// <reference path="../declarations/express/express.d.ts" />

import express = require('express');
import Middleware = require('./middleware/index');

var app = express();

Middleware.bootstrap(app);

app.get('/', function(req, res){
    res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});