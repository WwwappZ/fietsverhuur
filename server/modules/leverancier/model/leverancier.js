const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model definition
const CatSchema = new Schema({
  naam: String,
  beschrijving: String,
  bedrijf: {
    type: Schema.Types.ObjectId,
    ref: 'bedrijven'
},
});


module.exports = mongoose.model('leverancier', CatSchema);
