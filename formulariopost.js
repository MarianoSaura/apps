var express = require('express');
var path = require('path');
var app = express();
var body = require('body-parser');

app.use(body.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')));

app.post('/saludos', function(req, res, next){

	res.send('Gracias por su envio '+ req.body.nombre)

})
	app.use(function(error, req, res, next){
		res.send(error.toString())
	})


//app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000);


