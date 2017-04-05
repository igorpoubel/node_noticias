
module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        // ACESSANDO O db COMO UM NAMESPACE
        var connection = app.config.dbConnection();
        var Noticia = app.app.models.noticiasModel;

        Noticia.findAll(connection, function (error, result) {
            res.render('noticias/noticias', {noticias: result});
        });


    });
};