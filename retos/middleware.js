module.exports = {
    multiplica: function(req, res, next){
        console.log('* * * Middleware Global * * *');
        const {nro} = req.body;
        nro.map((values) => {
            const obj = {
                multiplica: values * 89
            }
            console.log('Middleware:', obj);
        });
        next();
    }
};