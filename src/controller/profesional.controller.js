const Profesional = require("../model/profesional");


const getProfesional = async (req, res) => {
  try {
    const { nombre } = req.params;
    const profesional = await Profesional.findOne({ nombre });
    if (!profesional) {
      return res.status(404).json({ message: "Profesional no encontrado" });
    }
    res.status(200).json(profesional);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getProfesionales = async (req, res) => {
  try {
    const profesionales = await Profesional.find();
    res.status(200).json(profesionales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const postProfesional = async (req, res) => {
  try {
    const nuevoProfesional = new Profesional(req.body);
    await nuevoProfesional.save();
    res.status(201).json({ message: "Profesional añadido correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const putProfesional = async (req, res) => {
  try {
    const { nombre } = req.params;
    await Profesional.findOneAndUpdate({ nombre }, req.body);
    res.status(200).json({ message: "Profesional modificado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const delProfesional = async (req, res) => {
  try {
    const { nombre } = req.params;
    await Profesional.findOneAndDelete({ nombre });
    res.status(200).json({ message: "Profesional eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProfesional,
  getProfesionales,
  postProfesional,
  putProfesional,
  delProfesional,
};
