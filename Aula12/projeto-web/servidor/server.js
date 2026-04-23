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
  ],
  animais: [
    {
      id: 1,
      idade: 0,
      raca: "aaaa",
      estaVivo: true,
      peso: 3.5,
      comidasQueGosta: [
        {"nome": "batata",},
        {"nome": "arroz",},
        {"nome": "carne",},
      ]
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

// get All Animais
app.get("/animais", (req, resp) => {
  return resp.json(database.animais)
})

// get Animal por ID
app.get("/animal/:id", (req, resp) => { 
  const id = parseInt(req.params.id)
  const animal = database.animais.find(a => a.id === id)
  if(animal) {
    return resp.json(animal)
  }
  return resp.status(404).json({ message: "Animal não encontrado" })
})


// apagar animal por ID
app.delete("/animal/:id", (req, resp) => {
  const id = parseInt(req.params.id)
  const index = database.animais.findIndex(a => a.id === id)
  if(index !== -1) {
    database.animais.splice(index, 1)
    return resp.json({ message: "Animal apagado com sucesso" })
  }
  return resp.status(404).json({ message: "Animal não encontrado" })
})


// criar novo animal
app.post("/animal", (req, resp) => {
  const { idade, raca, estaVivo, peso, comidasQueGosta } = req.body
  const novoAnimal = {
    id: database.animais.length + 1,
    idade,
    raca,
    estaVivo,
    peso,
    comidasQueGosta
  }
  database.animais.push(novoAnimal)
  return resp.status(201).json(novoAnimal)
})


// atualizar um animal por ID
app.put("/animal/:id", (req, resp) => {
  const id = parseInt(req.params.id)
  const { idade, raca, estaVivo, peso, comidasQueGosta } = req.body
  const animal = database.animais.find(a => a.id === id)
    if(animal) {
      if (idade !== undefined) animal.idade = idade;
      if (raca !== undefined) animal.raca = raca;
      if (estaVivo !== undefined) animal.estaVivo = estaVivo;
      if (peso !== undefined) animal.peso = peso;
      if (comidasQueGosta !== undefined) animal.comidasQueGosta = comidasQueGosta;
      return resp.json(animal)
    }
    return resp.status(404).json({ message: "Animal não encontrado" })
  }
);





// =============================
// SERVIDOR
// =============================
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});