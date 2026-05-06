const express = require("express");
const cors = require("cors");
const app = express();
const calcRoutes = require("./routes/calcRoutes");

// =============================
// MIDDLEWARES
// =============================
app.use(cors()); // libera acesso de outros domínios (ex: frontend)
app.use(express.json()); // permite receber JSON no body

// rota de teste
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.use(calcRoutes);

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

const PORT = 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API rodando em http://192.168.137.1:${PORT}`);
});