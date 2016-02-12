var express = require('express');
var router = express.Router();
router.get("/teste",function(req,res){
    res.json({"Message" : "Hello World !"});
})