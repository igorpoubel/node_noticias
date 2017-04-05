module.exports = function (app) {
    app.get('/inclusao',function (req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar',function (req, res) {
        var noticia = req.body;
        res.send(noticia);
    });
};