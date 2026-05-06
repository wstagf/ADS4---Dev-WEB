## Organização do projeto em MVC

# Vamos extrair a lógica de cálculo para um controller separado, para manter o código mais organizado e facilitar a manutenção.


* obs: poderiam existir outras pastas, como "models" para lidar os objetos pensando em POO, ou "services" para lidar com integrações externas, "middlewares" para lidar com autenticação, "repositories" para lidar com a persistência de dados, "daos" para lidar com a manipulação de dados, etc. Mas para o nosso exemplo, vamos focar apenas em controllers e routes.

1. Criar as pastas, 
    - controllers: para colocar a lógica de negócio, ou seja, as funções que realizam os cálculos.
    - routes: para colocar as rotas, ou seja, os endpoints que a API vai expor.



- todo arquivo XXXX-Routes.js deve exportar um router do express

exemplo de conteudo do arquivo calcRoutes.js:

```javascript
const express = require("express");
const router = express.Router();

// aqui vão as rotas, por exemplo:
router.post("/xxxx", (req, res) => {
    // aqui vai a lógica de negócio, ou seja, os cálculos
});

module.exports = router;

```


- todo arquivo XXXX-Controller.js deve exportar um objeto com as funções que realizam a lógica de negócio, ou seja, os cálculos.



