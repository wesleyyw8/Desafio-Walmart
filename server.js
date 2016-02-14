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
		var userId = req.param('userid');
		var query = "SELECT CLI.nome as clienteNome, END.nome as enderecoNome, END.lugarejo, END.CEP, CID.nome as cidadeNome, EST.nome as estadoNome, P.nome as paisNome "+
		"FROM CIDADE CID, ENDERECO END, ESTADO EST, PAIS P, CLIENTE CLI "+
		"WHERE CLI.id="+userId+" AND CLI.id=END.id_cliente AND END.id_cidade = CID.id AND END.id_estado = EST.id AND END.id_pais = P.id";
		con.query(query,function(err,rows){
		  	if(err) throw err;

		  	console.log('Data received from Db:\n');
		  	console.log(rows);
	    	res.json({"enderecos" : rows});
		});
	});
});

app.use('/api', router);
app.get('*', function(req, res) {
    res.sendfile('./ui/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});