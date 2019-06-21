// Imports
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser'); //Converte os dados da requisição para o formado json por exemplo

app.use(cors());
app.use(bodyParser.json());
app.use(require('./src/routes'));

// Express rodando em porta específica
app.listen(process.env.PORT || 3001);