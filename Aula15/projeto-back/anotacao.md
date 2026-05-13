🧠 Resumo da Aula – API com Node.js

Nesta aula foi criada uma API simples usando Node.js com Express, abordando os principais conceitos de desenvolvimento backend.

⚙️ 1. Configuração inicial
Uso do Express para criar o servidor
Uso de middlewares:
cors() → permite acesso externo
express.json() → permite receber JSON
🌐 2. Criação de rotas
GET / → rota de teste (API online)
POST /somar → recebe dados pelo body (JSON)
POST /somarQuery → recebe dados pela query string

👉 Diferença importante:

body → usado em APIs modernas
query → usado em testes ou filtros
🔢 3. Parâmetros dinâmicos
POST /calc/:metodo

Permite executar operações diferentes:

somar
subtrair
multiplicar
dividir

👉 Uso de:

req.params → parâmetro da URL
switch → lógica da aplicação
📦 4. Manipulação de dados (simulando banco)
Criado um array listaDeUsuarios
GET /usuarios → lista usuários
POST /usuarios → adiciona usuário
🔍 5. Tipos de entrada de dados

Você trabalhou com:

req.body → dados do cliente
req.query → parâmetros da URL
req.headers → informações da requisição
🌐 6. Acesso na rede
Servidor configurado com:
"0.0.0.0"

👉 Permite acesso via IP:

http://192.168.137.1:3000
🚀 Conclusão

A aula mostrou como:

Criar uma API REST básica
Receber dados de diferentes formas
Criar rotas dinâmicas
Simular persistência de dados
Expor a API na rede local