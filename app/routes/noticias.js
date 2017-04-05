
module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        // ACESSANDO O db COMO UM NAMESPACE
        var connection = app.config.dbConnection();
        var Noticia = new app.app.models.noticiasModel(connection);

        Noticia.findAll(function (error, result) {
            res.render('noticias/noticias', {noticias: result});
        });


    });
};