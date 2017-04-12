module.exports.inclusao = function (app, req, res) {
    res.render('admin/form_add_noticia', {validacao:{}, noticia:{}});
};


module.exports.noticias_salvar = function (app, req, res) {

    var noticia = req.body;

    req.assert('titulo','Título obrigatório').notEmpty();
    req.assert('resumo','Resumo obrigatório').notEmpty();
    req.assert('resumo','Resumo deve ter pelo menos 10 caracteres e no máximo 100 caracteres').len(10,100);
    req.assert('autor','Autor obrigatório').notEmpty();
    req.assert('data_noticia','Data obrigatório').notEmpty().isDate({format:'YYYY-MM-DD'});
    req.assert('noticia','Noticia obrigatório').notEmpty();

    var erros = req.validationErrors();

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

};