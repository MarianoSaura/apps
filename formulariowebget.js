var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/hola', function(req, res, next){

	res.send('Gracias por sus datos '+ req.query.nombre)

})
	app.use(function(error, req, res, next){
		res.send(error.toString())
	})


//app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000);


