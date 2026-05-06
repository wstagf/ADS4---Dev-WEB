const express = require("express");
const router = express.Router();


listaDeUsuarios = [];
router.get("/usuarios", (req, res) => {
  res.send(listaDeUsuarios);
});

router.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;
  const destino = req.headers["destino"] || "desconecido";
  const queryParamter = req.query.destino || "desconecido";
  console.log(`Novo usuário: ${nome} (${email})`); 
  listaDeUsuarios.push({ nome, email });

  res.send({ mensagem: `queryParamter ${queryParamter} ` });
});

module.exports = router;
