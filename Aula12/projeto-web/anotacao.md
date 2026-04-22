# Comunicando com api. 

1. requisitos:
    - node.js instalado na maquina
    - editor de código (recomendo o vscode)
    - codigo base do projeto criado 3
        - https://github.com/wstagf/ADS4---Dev-WEB/tree/master/Aula11/projeto-web



2. Instalar o axios para fazer as requisições http:
    - Rodar o comando no terminal:
    npm install axios --save

        - Escolher o framework: React
        - Escolher a variante: Typescript


3. Entrar na pasta do projeto:
    cd projeto-web


4. Abrir o projeto no editor de código:
    code .






## Limpar o projeto

    1. Remover os arquivos desnecessários:
        - pasta src/assets

        - apagar todo o conteudo do    
            - src/App.css
            - index.css

        - apagar o conteudo do src/App.tsx e colocar o seguinte código:
        ```tsx
         import './App.css'

            function App() {

            return (
                <p>Olá Senai</p>
            )
            }

            export default App
        ```


## Criar um arquivo chamado login.tsx
    com o mesmo conteudo abaixo,

    ```tsx
    import './App.css'

    function Login() {
        return (
            <div>COLE O CODIGO HTML DO CHATPT AQUI </div>
        )
    }
    ```

    * Colocar nele um html simples de um formulario de login, com os seguintes campos:
    - email
    - senha
    - botão de login

    * pode pedir para o chatgpt criar o codigo do formulario de login, caso queira.
    * somente cole o conteudo separado. 
        - app.css ficará o style que o chatgpt criar. 

        - login.tsx ficará o html do formulario de login.

        - Lembrar de trocar de `class` para `className` no html, para que o react entenda.
        - lembrar de fechar as tags input corretamente, para evitar erros de sintaxe no react.

# Utilizar o componete Login na pagina principal do projeto

    - Para isso, é necessário importar o componente Login no arquivo App.tsx e utilizá-lo dentro do return.
    
    ```tsx

    import './App.css'
    import Login from './login'
    function App() {
        return (
            <Login></Login>
        )
    }
    export default App
    ```
    



# Conteudo da pagina...

    - app.tsx é a pagina principal do projeto, onde o conteudo é renderizado.




# informacoes uteis

    - no arquivo tsx nós misturamos html com javascript, por isso é necessário utilizar a sintaxe do react para criar os elementos html, como por exemplo, utilizar className ao invés de class, e fechar as tags corretamente. Igualmente toda vez que queremos sair do html para utilizar javascript, é necessário utilizar as chaves {} para indicar que estamos utilizando javascript.