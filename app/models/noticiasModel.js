function Noticias(connection) {
    this._connection = connection;
}

Noticias.prototype.findAll = function (callback) {
    this._connection.query("select * from noticias", callback);
};

Noticias.prototype.findById = function (id, callback) {
    this._connection.query("select * from noticias where id_noticia = " + id, callback);
};

Noticias.prototype.save = function (data, callback) {
    this._connection.query('INSERT INTO noticias SET ? ', data, callback);
};

module.exports = function () {
    return Noticias;
}