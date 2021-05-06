const express = require('express');
const router = express.Router();
const statController = require('../controllers/statController');

module.exports = function() {
    // Agrega nuevos stats via POST
    router.post('/stats', 
        statController.nuevoStat
    );

    // Obtiene todos los registros de stats en la BD
    router.get('/stats',
        statController.obtenerStats
    );

    return router;
}