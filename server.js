var express = require('express');
var mysql = require("mysql");
var bodyParser  = require("body-parser");
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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

router.get("/getClientes",function(req,res){
    getConnection(function(error, con){
        if(error) throw error;
        var userId = req.param('userid');
        var query = "SELECT * "+
                    "FROM CLIENTE CLI "+
                    "WHERE CLI.id='"+userId+"'";
        con.query(query,function(err,rows){
            if(err) throw err;

            console.log('Data received from Db:\n');
            console.log(rows);
            res.json({"cliente" : rows});
        });
    });
});

app.post('/api/updateClientes', function(req, res) {
    getConnection(function(error, con){
        if(error) throw error;

        var user_id = req.body.userid;
        var nome = req.body.nome;
        var sexo = req.body.sexo;
        var idade = req.body.idade;
        var query = "UPDATE CLIENTE SET nome='"+nome+"', idade="+idade+", sexo='"+sexo+"' WHERE cliente.id = "+user_id+";"

        con.query(query,function(err,rows){
            if(err) throw err;

            res.json({
                msg: "usuario alterado!",
                query: query
            });
        });
    });
});

router.get("/getPedidos",function(req,res){
    getConnection(function(error, con){
        if(error) throw error;
        var userId = req.param('userid');
        var query = " select PED.id as pedidoId, END.nome as enderecoNome, END.lugarejo as enderecoLugarejo, CLI.nome as clienteNome, PRO.imagem as produtoImagem, PED.id_cliente as clienteId, PRO.nome as produtoNome , PED.id_produto as produtoId, PED.id_endereco as enderecoId, PED.quantidade as pedidoQuantidade, PED.quantidade * PRO.preco AS total, PED.data as pedidoData"+
                     " from PEDIDO PED, PRODUTO PRO , CLIENTE CLI, ENDERECO END "+
                     " where "+
                     " PED.id_cliente = '"+userId+"' AND "+
                     " PED.id_produto = PRO.id AND"+
                     " CLI.id = PED.id_cliente AND"+
                     " PED.id_endereco = END.id";
        con.query(query,function(err,rows){
            if(err) throw err;

            console.log('Data received from Db:\n');
            console.log(rows);
            res.json({"pedidos" : rows});
        });
    });
});

app.use('/api', router);
app.get('*', function(req, res) {
    res.sendfile('./ui/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});