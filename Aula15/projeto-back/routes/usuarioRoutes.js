const express = require("express");
const usuariosController = require("../controllers/usuariosController");

const router = express.Router();

const autenticar = require("../middlewares/autenticar");

router.get("/usuarios", autenticar, usuariosController.listarUsuarios);
router.post("/usuarios", usuariosController.criarUsuario);
router.put("/usuarios/:id", autenticar,  usuariosController.atualizarUsuario);
router.delete("/usuarios/:id", autenticar, usuariosController.deletarUsuario);

module.exports = router;