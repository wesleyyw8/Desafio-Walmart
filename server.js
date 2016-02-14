var express = require('express');
var mysql = require("mysql");
var bodyParser  = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/ui')); 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "WALMARTDESAFIO"
});

function connect(){
	con.connect(function(err){
	  if(err){
	    console.log('Error connecting to Db');
	    return;
	  }
	  console.log('Connection established');
	});
}

function disconect(){
	con.end(function(err) {
	  if (err){
	  	console.log("Error na hora de desconectar do banco");
	  }
	  console.log("Disconected");
	});
}

var server = app.listen(3000,function(){
    console.log("We have started our server on port 3000!");
});
var router = express.Router();
var router = express.Router();
router.get("/teste",function(req,res){
	/*connect();
	con.query('SELECT * FROM employees',function(err,rows){
	  	if(err) throw err;

	  	console.log('Data received from Db:\n');
	  	console.log(rows);
    	res.json({"Message" : rows});
	});
	disconect();*/
});

router.get("/getEnderecos",function(req,res){
	connect();
	con.query('SELECT * FROM ENDERECO where id_cliente=1',function(err,rows){
	  	if(err) throw err;

	  	console.log('Data received from Db:\n');
	  	console.log(rows);
    	res.json({"data" : rows});
	});
	disconect();
});

app.use('/api', router);
app.get('*', function(req, res) {
    res.sendfile('./ui/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});