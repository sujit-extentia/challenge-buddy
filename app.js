var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routers = require('./routers.js');
//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use(allowCrossDomain);
var port = process.env.PORT || 8080; // set our port
app.get('/', function(req, res) {
    console.log('App is running on port ' + port);
    res.send("App is running on port " + port);
});

app.post('/api/sendNotification', routers.sendNotification);

app.listen(port, function() {
    console.log('Server started on port ' + port);
});
