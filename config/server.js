var express = require('express');
var expressValidator = require('express-validator');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './app/views');

// MÓDULO PARA USO DO BODY PARSER, PARA RECEBIMENTO DAS REQUISIÇÕES POST.
app.use(bodyParser.urlencoded({extended:true})); // extended:true - PERMITE IMPLEMENTAR URL CODIFICADAS ATRAVÉS DO JSON
// VALIDAÇÃO DO EXPRESS
app.use(expressValidator());

// INICIALIZAÇÃO AUTOMATICA DOS MÓDULOS
consign()
    .include('app/routes') // INICIALIZA TODOS OS MODULOS NA PASTA routes
    .then('config/dbConnection.js') // INICIALIZA SOMENTE O BANCO
    .then('app/models') // INICIALIZA MODELS
    .into(app);

module.exports = app;