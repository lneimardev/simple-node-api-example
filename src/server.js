// Importando bibliotecas
const express = require("express");
const routers = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://admin:admin@clusterfluttercalc.3fomz.mongodb.net/dev?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true //,
        //useFindAndModify: false
    }
);

// Importando/Instanciando
require("./jobs/jobs");

//mongodb+srv://admin:<password>@clusterfluttercalc.3fomz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// Configurações
const port = 3333;

// Iniciando App
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routers);
app.use(express.json());

app.listen(process.env.PORT || port, () =>
    console.log(`Aplicação rodando e ouvindo na porta ${port}`)
);
