const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model definition
const ReserveringenSchema = new Schema({
    voorraad: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "voorraad",
  },
  gast: String,
  start: Date,
  eind: Date,
  actief: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("reserveringen", ReserveringenSchema);
