const express = require('express');
const routers = require('./routes/routes');
require('./jobs/jobs');

const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

app.use(routers);
app.use(express.json());

app.listen(3333);