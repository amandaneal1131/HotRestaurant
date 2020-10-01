// API's
var bodyParser = require('body-parser');
var express = require('express');
// built in node package
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});