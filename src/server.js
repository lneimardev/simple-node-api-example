// Importando bibliotecas
const express = require('express');
const routers = require('./routes/routes');
const bodyParser = require("body-parser");
var cors = require('cors');

// Importando/Instanciando
require('./jobs/jobs');

// Configurações
const port = 3333 

// Iniciando App
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routers);
app.use(express.json());

app.listen(process.env.PORT || port, () => console.log(`Aplicação rodando e ouvindo na porta ${port}`));