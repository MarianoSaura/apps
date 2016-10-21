var express = require('express');
var path = require('path');
var app = express();
var body = require('body-parser');
var methodOverride = require('method-override');

app.use(body.urlencoded({extended:true}))

//app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'public')));

app.post('/sumar', function(req, res){
	var suma = parseInt(req.body.numero1) + parseInt(req.body.numero2);
	res.send(200, suma);
	res.send(JSON.stringify({total: suma}));
});

app.use(function(error, req, res, next){
	res.send(error.toString());
});
	

app.listen(8000);


