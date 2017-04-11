module.exports.noticias = function (app, req, res) {
    // ACESSANDO O db COMO UM NAMESPACE
    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.noticiasModel(connection);

    Noticia.findAll(function (error, result) {
        res.render('noticias/noticias', {noticias: result});
    });
};


module.exports.noticia = function (app, req, res) {
    // ACESSANDO O db COMO UM NAMESPACE
    var connection = app.config.dbConnection();
    var Noticia = new app.app.models.noticiasModel(connection);

    Noticia.findById(2, function (error, result) {
        res.render('noticias/noticia', {noticias: result});
    });
};