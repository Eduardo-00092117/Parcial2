var express = require('express');
var router = express.Router();
const NavegadorController = require('../controllers/navegadorControllers');

router.post('/Navegadores_web', NavegadorController.agregar);

router.delete('/Navegadores_web/:id', NavegadorController.eliminar);

router.put('/Navegadores_web/:id', NavegadorController.modificar);

module.exports = router;