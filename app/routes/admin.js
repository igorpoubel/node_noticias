module.exports = function (app) {
    app.get('/inclusao',function (req, res) {
        app.app.controllers.admin.inclusao(app,req, res);
    });

    app.post('/inclusao',function (req, res) {
        app.app.controllers.admin.noticias_salvar(app,req, res);
    });
};