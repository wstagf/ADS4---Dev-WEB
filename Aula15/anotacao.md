##  Seguranca... Adicionando autenticacao

# os sistemas modernos precisam de seguranca, e a autenticacao e um passo importante para isso. Vamos adicionar autenticacao ao nosso sistema usando JWT (JSON Web Tokens).
# Com o uso de JWT, somente os endpoints de autenticacao e registro serao publicos, e o restante dos endpoints exigirao um token valido para acesso. Isso garante que apenas usuarios autenticados possam acessar os recursos protegidos do sistema.



## Alterações
    - Adicionar a lib "bcrypt",  e a lib      "jsonwebtoken" no package.json


    - criamos o loginController, com a funcao de login, que recebe email e senha, verifica se o usuario existe, compara a senha usando bcrypt, e se for valido, gera um token JWT e retorna para o cliente.
