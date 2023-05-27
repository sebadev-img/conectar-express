const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  numero: Number,
  estado: {
    type: String,
    enum: ["pendiente", "completado", "entregado"],
  },
  entradaTecnico: {
    type: String,
    trim: true,
  },
  entradaFecha: String,
  reparadaTecnico: {
    type: String,
    trim: true,
  },
  reparadaFecha: String,
  salidaTecnico: {
    type: String,
    trim: true,
  },
  salidaFecha: String,
  noteNombre: String,
  noteSerie: Number,
  noteTelefono: Number,
  noteDetalle: String,
});

module.exports = mongoose.model("Task", TaskSchema);
