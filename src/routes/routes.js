const express = require("express");
const testController = require('../controllers/testeController');


const routes = express.Router();


routes.get("/calculo1", testController.calculo1);

routes.get("/calculo2", testController.calculo2);

routes.get("/calculo3", testController.calculo3);

routes.post("/calculo4", testController.calculo4);

module.exports = routes
