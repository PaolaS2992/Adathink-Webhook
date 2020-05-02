const express = require('express');
const app = express();
const port = process.env.PORT || 3400;
const bodyParser = require('body-parser');

// Para que el servidor reciba request de tipo JSON.
app.use(bodyParser.json());
// http://localhost:3400/webhook
app.post('/webhook', function(req, res){
    let data = req.body;
    console.log('####################################');
    console.log(data);
    res.json({ message: 'Mensaje Recibido!' });
});

app.listen(port , () => {
    console.log(`Servidor ejecutando en el puerto ${port}`);
});

