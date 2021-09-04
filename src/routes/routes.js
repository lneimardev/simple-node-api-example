const express = require("express");

// Middlewares
const validatorSchemas = require("../middleware/validators/schemas");
const validatorMiddleware = require("../middleware/validators/validator");

// Controllers
const calculadoraController = require("../api/controllers/CalculadoraController");
const historicoController = require("../api/controllers/HistoricoController");

// Instanciando Rotas
const routes = express.Router();

// Rotas
routes.post(
    "/calculadora",
    validatorMiddleware(validatorSchemas.calculadoraRequest),
    calculadoraController.calculo
);
routes.get("/historico", historicoController.index);

module.exports = routes;
