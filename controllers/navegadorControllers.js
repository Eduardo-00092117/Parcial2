const mongoose = require('mongoose');
const User = require('../models/navegador');

let NavegadorController = {};

NavegadorController.agregar = function (req, res, next) {
    let navegador = new User();
    navegador.nombre = req.body.nombre;
    navegador.compania = req.body.compania,
    navegador.annio = req.body.annio
    try {
        User.insertMany(navegador);
        return res.status(200).json({ messege: 'La informacion se ha ingresado' });
    } catch (err) {
        res.status(500).json({ messege: 'La informacion no se ha ingresado' });
    }
}

NavegadorController.eliminar = async function (req, res, next) {
    let id = req.params.id;
    try {
        await User.deleteOne({_id: id});
        return res.status(200).json({ messege: 'La informacion se ha eliminado' });
    } catch (err) {
        res.status(500).json({ messege: 'La informacion no se ha eliminado' });
    }
    console.log(navegador);
}

NavegadorController.modificar = async function (req, res, next) {
    let id = req.params.id;
    let nav = {
        nombre: req.body.nombre,
        compania: req.body.compania,
        annio:req.body.annio
    }
    try {
        await User.update({_id: id}, nav);
        return res.status(200).json({ messege: 'La informacion se ha modificado' });
    } catch (err) {
        res.status(500).json({ messege: 'La informacion no se ha modificado' });
    }
    console.log(navegador);
}







module.exports = NavegadorController;