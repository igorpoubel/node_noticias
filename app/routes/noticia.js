
module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        // ACESSANDO O db COMO UM NAMESPACE
        var connection = app.config.dbConnection();
        var Noticia = new app.app.models.noticiasModel(connection);

        Noticia.findById(2, function (error, result) {
            res.render('noticias/noticias', {noticias: result});
        });


    });
};