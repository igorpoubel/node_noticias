module.exports.index = function (app, req, res) {

    // ACESSANDO O db COMO UM NAMESPACE
    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.noticiasModel(connection);

    Noticia.findLastFive(function (error, result) {
        res.render('home/index', {noticias: result});
    });

}