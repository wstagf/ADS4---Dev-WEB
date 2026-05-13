const express = require("express");
const router = express.Router();
const autenticar = require("../middlewares/autenticar");


// rota de teste
router.post("/somar", autenticar, (req, res) => {
  x = req.body.x;
  y = req.body.y;
  console.log(`Recebido: x=${x}, y=${y}`);
  resultado = x + y;
  res.send({ resultado });
});


// rota de teste
router.post("/somarQuery", autenticar, (req, res) => {
  const x = parseFloat(req.query.x) || 0;
  const y = parseFloat(req.query.y) || 0;
  console.log(`Recebido: x=${x}, y=${y}`);
  resultado = x + y;
  res.send({ resultado });
});


// rota de teste
router.post("/calc/:metodo", autenticar, (req, res) => {

  const x = parseFloat(req.query.x) || 0;
  const y = parseFloat(req.query.y) || 0;
  console.log(`Recebido: x=${x}, y=${y}`);

  resultado = 0;

  switch (req.params.metodo) {
    case "somar":
        resultado = x + y;
        break;
    case "subtrair":
        resultado = x - y;
        break;
    case "multiplicar":
        resultado = x * y;
        break;
    case "dividir":
        resultado = y !== 0 ? x / y : "Erro: divisão por zero";
        break;

    default:
        resultado = "Método desconhecido";
        break;
  } 
  res.send({ resultado });
});


module.exports = router;