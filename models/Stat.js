const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const statSchema = new Schema({       
    id_player: {
        type: String,
        trim: true
    },
    nickname: {
        type: String,
        trim: true,
    },
    fecha: {
        type: String,
        trim: true
    },
    score: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Stat', statSchema);