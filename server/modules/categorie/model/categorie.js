const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model definition
const CatSchema = new Schema({
  naam: String,
  beschrijving: String,
  leverancier: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'leverancier'
  },
});


module.exports = mongoose.model('categorie', CatSchema);
