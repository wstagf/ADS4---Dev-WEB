const express = require("express");
const cors = require("cors");
const app = express();
const calcRoutes = require("./routes/calcRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const testesRoutes = require("./routes/testeRoutes");

app.use(cors()); // libera acesso de outros domínios (ex: frontend)
app.use(express.json()); // permite receber JSON no body

app.use(testesRoutes);
app.use(calcRoutes);
app.use(usuarioRoutes);

const PORT = 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API rodando em http://192.168.137.1:${PORT}`);
});