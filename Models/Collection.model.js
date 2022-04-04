const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
    nombre: String,
    apellidos: String
})

const Collection = mongoose.model('collection1', collectionSchema);

module.exports = Collection;