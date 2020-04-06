const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model definition
const VoorraadSchema = new Schema({
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "categorie",
  },
  object: String,
  objectnummer: String,
  eigenschappen: String,
  status: Number
});

module.exports = mongoose.model("voorraad", VoorraadSchema);

