var express    =    require('express');
var app        =    express();

app.use(express.static(__dirname + '/ui')); 

var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000!");
});

app.get('*', function(req, res) {
    res.sendfile('./ui/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});