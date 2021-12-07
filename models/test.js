const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  title: { type: String },
  subtitle: { type: String },
  status: { type: Boolean, default: true }
});

const Test = mongoose.model("Tests", TestSchema);
module.exports = Test;