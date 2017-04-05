module.exports = function (app) {
    app.get('/inclusao',function (req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar',function (req, res) {
        var noticia = req.body;

        // ACESSANDO O db COMO UM NAMESPACE
        var connection = app.config.dbConnection();
        var Noticia = app.app.models.noticiasModel;

        Noticia.save(connection, noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
};