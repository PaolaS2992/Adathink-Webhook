const express = require('express');
const app = express();
const port = process.env.PORT || 3400;
const bodyParser = require('body-parser');

const middleware = require('./middlewares');

// Para que el servidor reciba request de tipo JSON.
app.use(bodyParser.json());

app.post( '/otraruta' ,function(req, res){

});

// Injectamos un middleware unico.
app.post('/webhook', middleware.saludo, function(req, res){
    let data = req.body;
    console.log(req.saludo);
    console.log('############');
    console.log(data);
    res.json({ mensaje: 'Mensaje Recibido !!!' });
});

// Iniciar servidor.
app.listen(port, () => {
    console.log(`Servidor ejecutando puerto: ${port}`);
});