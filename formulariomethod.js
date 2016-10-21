var express = require('express');
var path = require('path');
var app = express();
var body = require('body-parser');
var methodOverride = require('method-override');

app.use(body.urlencoded({extended:true}))

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'public')));

app.put('/saludo', function(req, res){

	res.send('Gracias por sus datos '+ req.body.nombre)

})
	

app.listen(8000);


