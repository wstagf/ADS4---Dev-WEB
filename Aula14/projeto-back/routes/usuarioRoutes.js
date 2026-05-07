const express = require("express");

const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

router.get("/usuarios", usuariosController.listarUsuarios);

module.exports = router;