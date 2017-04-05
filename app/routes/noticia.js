
module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        // ACESSANDO O db COMO UM NAMESPACE
        var connection = app.config.dbConnection();
        var Noticia = app.app.models.noticiasModel;

        Noticia.findById(connection, 2, function (error, result) {
            res.render('noticias/noticias', {noticias: result});
        });


    });
};