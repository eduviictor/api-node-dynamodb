const express = require('express');
const routes = express.Router();
const ContatoController = require('./controllers/ContatoController');

// Get de todos os itens
routes.get('/', ContatoController.list);

// Get de um item específico
routes.get('/contatos/:id', ContatoController.show);

// Insert
routes.post('/new', ContatoController.insert);

// Delete
routes.delete('/contatos/:id', ContatoController.remove);

// Update
routes.put('/contatos/:id', ContatoController.update);

module.exports = routes;