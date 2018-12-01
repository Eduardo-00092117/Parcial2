const express = require('express');
const router = express.Router();
const NavegadorController = require('../controllers/navegadorControllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/Navegadores_web', NavegadorController.agregar);

router.delete('/Navegadores_web/:id', NavegadorController.eliminar);

router.put('/Navegadores_web/:id', NavegadorController.modificar);

module.exports = router;
