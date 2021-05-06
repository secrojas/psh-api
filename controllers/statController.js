const Stat = require('../models/Stat');

//cuando se crea un nuevo stat
exports.nuevoStat = async (req, res, next) => {

    // crear objeto de stat con datos de req.body
    const stat = new Stat(req.body);
    
    try {
        await stat.save();
        res.json({ mensaje : 'El registro se agregó correctamente'}); 
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene todos los stats */
exports.obtenerStats = async (req, res, next) => {
    try {
        const stats = await Stat.find({}).sort({score:-1});
        res.json(stats);
    } catch (error) {
        console.log(error);
        next();
    }
}