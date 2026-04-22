const express = require("express");
const cors = require("cors");

const app = express();

// =============================
// MIDDLEWARES
// =============================
app.use(cors()); // libera acesso de outros domínios (ex: frontend)
app.use(express.json()); // permite receber JSON no body

// =============================
// CAMADA DE PERSISTÊNCIA (MOCK)
// =============================
const database = {
  users: [
    {
      id: 1,
      username: "admin",
      password: "123"
    }
  ]
};

// =============================
// CAMADA DE REGRA DE NEGÓCIO
// =============================
const authService = {
  login: (username, password) => {

    // validação básica
    if (!username || !password) {
      return {
        success: false,
        message: "Usuário e senha são obrigatórios"
      };
    }

    const user = database.users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      return {
        success: false,
        message: "Credenciais inválidas"
      };
    }

    return {
      success: true,
      token: "fake-jwt-token",
      user: {
        id: user.id,
        username: user.username
      }
    };
  }
};

// =============================
// ROTAS
// =============================

// rota de teste
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("=== LOGIN REQUEST ===");
  console.log("username:", username);
  console.log("password:", password);

  const result = authService.login(username, password);

  res.json(result);
});

// =============================
// SERVIDOR
// =============================
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});