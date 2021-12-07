const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  titulo: { type: String },
  autor: { type: String },
  data_publicacao: { type: Date },
  conteudo: { type: String },
  descricao: { type: String }
  // status: { type: Boolean, default: true }
});

const Noticia = mongoose.model("Noticias", NoticiaSchema);
module.exports = Noticia;