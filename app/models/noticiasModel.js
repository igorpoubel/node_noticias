module.exports = function () {

    this.findAll = function (connection, callback) {
        connection.query("select * from noticias", callback);
    }

    this.findById = function (connection, id, callback) {
        connection.query("select * from noticias where id_noticia = " + id, callback);
    }
    
    this.save = function (connection, data, callback) {
        connection.query('INSERT INTO noticias SET ? ', data, callback);
    }

    return this;

}