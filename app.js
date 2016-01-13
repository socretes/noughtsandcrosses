var express = require('express');

var app = express();

var session = require('express-session');
var partials = require('express-partials');
var cookieParser = require('cookie-parser');
var config = require('./config');
var errorHandlers = require('./middleware/errorhandlers.js');
var log = require('./middleware/log.js');
var routes = require('./routes');

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(log.logger);
app.use(partials());
app.use(session({
	secret: config.secret,
	saveUninitialized: true,
	resave: true}));

app.set('view options', {defaultLayout: 'layout'});

app.get('/', routes.index);
app.get(config.routes.login, routes.login);
app.post(config.routes.login, routes.loginProcess);
app.get('/chat', routes.chat);
app.use(errorHandlers.notFound);
app.use(errorHandlers.error);

app.listen(config.port);

console.log("App server running on port 3000");
