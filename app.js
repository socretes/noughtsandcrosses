var express = require('express');
var app = express();
var partials = require('express-partials');

var errorHandlers = require('./middleware/errorhandlers.js');
var log = require('./middleware/log.js');
var routes = require('./routes');

app.set('view engine', 'ejs');
app.use(log.logger);
app.use(partials());

app.set('view options', {defaultLayout: 'layout'});

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.use(errorHandlers.notFound);
app.use(errorHandlers.error);

app.listen(3000);

console.log("App server running on port 3000");
