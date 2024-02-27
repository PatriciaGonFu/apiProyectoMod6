const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers/profesional.routers"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(routers);

module.exports = app;
