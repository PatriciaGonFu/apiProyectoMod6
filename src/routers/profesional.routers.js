const express = require("express");
const router = express.Router();
const profesionalController = require("../controller/profesional.controller");

router.get("/profesional/:nombre", profesionalController.getProfesional);

router.get("/profesionales", profesionalController.getProfesionales);

router.post("/profesional", profesionalController.postProfesional);

router.put("/profesional/:nombre", profesionalController.putProfesional);

router.delete("/profesional/:nombre", profesionalController.delProfesional);

module.exports = router;
