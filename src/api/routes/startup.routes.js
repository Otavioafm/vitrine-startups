const express = require('express');
const router = express.Router();

// Rotas para Startups
router.get('/startups', 'GET /api/startups - Lista todas as startups');
router.get('/startups/:id', 'GET /api/startups/:id - Obtém uma startup específica');
router.get('/startups/search', 'GET /api/startups/search - Pesquisa startups');
router.post('/startups', 'POST /api/startups - Cria uma nova startup');
router.put('/startups/:id', 'PUT /api/startups/:id - Atualiza uma startup');
router.delete('/startups/:id', 'DELETE /api/startups/:id - Remove uma startup');

// Rotas para interações
router.post('/startups/:id/like', 'POST /api/startups/:id/like - Curte uma startup');
router.post('/startups/:id/share', 'POST /api/startups/:id/share - Compartilha uma startup');

module.exports = router;
