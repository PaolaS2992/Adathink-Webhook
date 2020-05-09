const request = require('request');

const url = 'http://localhost:3000/webhook';

setInterval(
    function(){
        const secuenciaNros = (numero) => {
            let arrPares = [];
            let arrImpares = [];
            // for (let j = 0; j < 2; j++){
                for(let i = 0; i < numero; i++){
                    if (i % 2 === 0){
                        arrPares.push(i);
                    } else {
                        arrImpares.push(i);
                    }
                }
            // }
            const secuencia = arrPares.concat(arrImpares);
            return secuencia;
        };

        const arrSecuencia = { nro: secuenciaNros(10) }

        request({
            method: 'POST',
            uri: url,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(arrSecuencia)
        }, function(err, res, body) {
            if (err){
                console.log('Existe un Error :( !!!');
                return;
            }
            let mensaje = JSON.parse(body);
            mensaje.map((values) => {
                const obj = { mensaje: values }
                console.log('Webhook:', obj);
            });
        });
    }, 2000);