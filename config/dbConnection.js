var mysql = require('mysql');


// ENCAPSULAMENTO PARA NÃO EXECUTAR O BANCO DE DADOS SEMPRE QUE O SISTEMA FOR INICIALIZADO
var conn = function () {
    console.log('db CONNECTION [STARTED]');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '112233',
        database: 'portal_noticias'
    });
};


module.exports = function () {
    // AUTOLOAD SOMENTE INICIALIZA A VARIAVEL, PERMITINDO SER USADA QUANDO INSTANCIADA
    console.log('AUTOLOAD db [ON]');
    return conn;
};