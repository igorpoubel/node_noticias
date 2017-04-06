module.exports = function (app) {
    app.get('/inclusao',function (req, res) {
        res.render('admin/form_add_noticia', {validacao:{}, noticia:{}});
    });

    app.post('/noticias/salvar',function (req, res) {
        var noticia = req.body;

        req.assert('titulo','Obrigatório').notEmpty();
        req.assert('resumo','Obrigatório').notEmpty();
        req.assert('resumo','10 e 100').len(10,100);
        req.assert('autor','Obrigatório').notEmpty();
        req.assert('data_noticia','Obrigatório').notEmpty().isDate({format:'YYYY-MM-DD'});
        req.assert('noticia','Obrigatório').notEmpty();

        var erros = req.validationErrors();
        console.log(erros);

        if(erros !== false){
            res.render('admin/form_add_noticia', {validacao:erros, noticia:noticia});
            return;
        }

        // ACESSANDO O db COMO UM NAMESPACE
        var connection = app.config.dbConnection();
        var Noticia = new app.app.models.noticiasModel(connection);

        Noticia.save(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });
};