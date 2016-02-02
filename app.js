var express    =    require('express');
var app        =    express();
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(express.static(__dirname + '/ui')); 
//app.use(express.static(__dirname + '/teste'));                 // set the static files location /public/img will be /img for users

var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000  KKK");
});
// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./ui/angular_views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});