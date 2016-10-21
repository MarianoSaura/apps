var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/mi_ruta/:nombreRuta', function(req, res, next){
	//res.send('<!DOCTYPE html><html><head><title>Hola Mariano</title></head><body><h1>Hola Mariano</h1></body></html>')
	if (req.params.nombreRuta == 'basica') {
		res.end('Petición Get');
	}else{
		next(new Error('Esta ruta no es válida'));
	}

})
	app.use(function(error, req, res, next){
		res.send(error.toString())
	})


//app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000);


