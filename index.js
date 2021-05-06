const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//crear el servidor
const app = express();

//Habilitar cors
app.use(cors());

//conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/psh', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar routing
app.use('/', routes())

// puerto y arrancar un servidor
app.listen(4000, () => {
    console.log('Servidor corriendo')
})