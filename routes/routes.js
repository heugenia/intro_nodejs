const db = require('../database/connection');
const express = require('express');
const router = express.Router();

const MesasController = require('../controllers/mesas');

router.get('/mesas', MesasController.listarMesas);