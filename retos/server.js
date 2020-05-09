const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const middlewareGlobal = require('./middleware');

// Middleware Parse Json.
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Middleware Global.
app.use(middlewareGlobal.multiplica);

app.post('/webhook', function(req, res) {
    const { nro } = req.body;
    nro.map((values) => {
        if (values % 2 == 0) {
            console.log(`Server: Recibì un nùmero par ${values}`);
        } else {
            console.log(`Server: Recibì un nùmero impar ${values}`);
        }
    });
    // console.log('Desde server', nro)
    res.json(nro);
});

app.listen(port , () => {
    console.log(`Server on port ${port}`);
});
