const express = require("express");
const cors = require("cors");
const app = express();

// =============================
// MIDDLEWARES
// =============================
app.use(cors()); // libera acesso de outros domínios (ex: frontend)
app.use(express.json()); // permite receber JSON no body

// rota de teste
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});


// rota de teste
app.post("/somar", (req, res) => {
  x = req.body.x;
  y = req.body.y;
  console.log(`Recebido: x=${x}, y=${y}`);
  resultado = x + y;
  res.send({ resultado });
});


// rota de teste
app.post("/somarQuery", (req, res) => {
  const x = parseFloat(req.query.x) || 0;
  const y = parseFloat(req.query.y) || 0;
  console.log(`Recebido: x=${x}, y=${y}`);
  resultado = x + y;
  res.send({ resultado });
});


// rota de teste
app.post("/calc/:metodo", (req, res) => {

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


listaDeUsuarios = [];
app.get("/usuarios", (req, res) => {
  res.send(listaDeUsuarios);
});



app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;
  const destino = req.headers["destino"] || "desconecido";
  const queryParamter = req.query.destino || "desconecido";
  console.log(`Novo usuário: ${nome} (${email})`); 
  listaDeUsuarios.push({ nome, email });

  res.send({ mensagem: `queryParamter ${queryParamter} ` });
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API rodando em http://192.168.137.1:${PORT}`);
});