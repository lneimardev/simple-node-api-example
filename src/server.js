// Importando bibliotecas
const express = require('express');
const routers = require('./routes/routes');
const bodyParser = require("body-parser");

// Importando/Instanciando
require('./jobs/jobs');

// Configurações
const port = 3333 

// Iniciando App
const app = express();

app.use(bodyParser.json());
app.use(routers);
app.use(express.json());

app.listen(port, () => console.log(`Aplicação rodando e ouvindo na porta ${port}`));