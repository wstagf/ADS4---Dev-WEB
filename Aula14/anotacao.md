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






- Agora vamos utilizar o banco de dados SQLITE para aramazenar os usuários e suas informações. para isso vamos instalar a biblioteca "sqlite3" e criar um arquivo de configuração para o banco de dados.
rodando o comando:
```bash
npm install sqlite3
```



- Para visualizar o banco dados vamos utilizar a aplicacao DBEAVER, que é uma ferramenta de gerenciamento de banco de dados. Ela é gratuita e fácil de usar. Você pode baixar ela no site oficial: https://dbeaver.io/download/


- videos de apoio -- https://www.youtube.com/watch?v=LEx96-CkB1Q
- video mais indicado --- https://www.youtube.com/watch?v=smV1zaqH5SI


- primeiro, no dbeaver crie a conexao com o banco de dados utilzando o driver SQLITE, e apontando para o arquivo do banco de dados que você criou no projeto (por exemplo, "database.sqlite"). Depois de criar a conexão, você pode abrir o banco de dados e executar comandos SQL para criar tabelas, inserir dados, etc.



- utilizamos o script abaixo para criar a tabela de usuários no banco de dados:

```sql
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

```



- Agora vamos inserir um registro de usuário na tabela "usuarios" para testar a conexão com o banco de dados:

```sql
INSERT INTO usuarios
( nome, email)
VALUES( 'xxx', '6yhh');
```
