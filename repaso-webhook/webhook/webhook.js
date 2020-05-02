const request = require('request');
console.log('Iniciando Mensajes Webhooks');

// Simulaciòn Server Facebook.
const url = 'http://localhost:3400/webhook';

setInterval(function() {
    console.log('Lanzando Webhook !');

    let dato = {
        id: Math.round(Math.random() * 10),
        mensaje: 'Hola, este es un mensaje desde Facebook'
    }
    request({
        method: 'POST',
        uri: url,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dato)
    }, function(err, response, body){
        if (err) {
            console.log('Ocurrio u error al enviar el mensaje');
            return
        }

        let mensaje = JSON.parse(body);
        console.log(mensaje);
    })
}, 5000);