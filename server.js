var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

// hook up routes
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

// express
var app = express();
var PORT = process.env.PORT || 8080;

// static
app.use(express.static(path.join(__dirname, './app/public')));
// app.use(express.static("/public"));
// app.use('/static', express.static(path.join(__dirname + 'public')));

// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// initialize routes 
apiRoutes(app);
htmlRoutes(app);

// listen
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  console.log("http://localhost:" + PORT);
});