var express = require('express');
var mysql = require("mysql");
var bodyParser  = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/ui')); 

var pool  =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'WALMARTDESAFIO',
    debug    :  false
});

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
    	if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   
        callback(err, connection);
    });
};

var server = app.listen(3000,function(){
    console.log("We have started our server on port 3000!");
});
var router = express.Router();
var router = express.Router();

router.get("/getEnderecos",function(req,res){
	getConnection(function(error, con){
		if(error) throw error;
		con.query('SELECT * FROM ENDERECO where id_cliente=1',function(err,rows){
		  	if(err) throw err;

		  	console.log('Data received from Db:\n');
		  	console.log(rows);
	    	res.json({"data" : rows});
		});
	});
});

app.use('/api', router);
app.get('*', function(req, res) {
    res.sendfile('./ui/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});