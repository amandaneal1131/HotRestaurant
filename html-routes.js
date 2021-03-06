// html route helps direct the user, when click on link, the router will understand 
// based on the informartion in this file, what page to deliver to them

var path = require('path');

module.exports = function (app) {

    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    });

    app.get('/reserve', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });

     // If no matching route is found default to home
    app.get("*",function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });

}