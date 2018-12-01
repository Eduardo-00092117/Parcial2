const express = require('express');
const router = express.Router();
const NavegadorController = require('../controllers/navegadorControllers');
const user = require('../models/users');

module.exports = NavegadorController;