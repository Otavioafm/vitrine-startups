const express = require('express');
const router = express.Router();

// Rotas para Categorias
router.get('/categories', 'GET /api/categories - Lista todas as categorias');
router.get('/categories/:id/startups', 'GET /api/categories/:id/startups - Lista startups por categoria');
router.post('/categories', 'POST /api/categories - Cria uma nova categoria');
router.put('/categories/:id', 'PUT /api/categories/:id - Atualiza uma categoria');
router.delete('/categories/:id', 'DELETE /api/categories/:id - Remove uma categoria');

module.exports = router;
