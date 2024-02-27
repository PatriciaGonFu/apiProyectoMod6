const mongoose = require("mongoose");

const ProfesionalSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    peso: Number,
    altura: Number, 
    enActivo: Boolean,
    nacionalidad: String,
    numOscars: Number,
    profesion: String,
    foto: String

})

module.exports = mongoose.model("Profesional", ProfesionalSchema)