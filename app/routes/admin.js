module.exports = function (app) {
    app.get('/inclusao',function (req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar',function (req, res) {
        var noticia = req.body;

        // ACESSANDO O db COMO UM NAMESPACE
        var connection = app.config.dbConnection();
        var Noticia = new app.app.models.noticiasModel(connection);

        Noticia.save(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
};