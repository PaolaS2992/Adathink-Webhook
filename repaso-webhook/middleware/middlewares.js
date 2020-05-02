module.exports = {
    saludo: function(req, res, next) {
        console.log('El intermediario');
        req.saludo = 'Hola desde el middleware';
        next(); //Dirige a la funcion final
    }
}