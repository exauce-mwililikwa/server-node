//
var express=require('express');

var server=express();
 
server.get('/', function (req, res){
res.setHeader('Content-Type','text/html');
res.status(200).send('<h1> bonour sur mon serveur </h1>');
});
server.listen(8080,function(){
    console.log('Server en ecoute');
});