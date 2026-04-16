# Criar o projeto web com Vite, React e Typescript

1. requisitos:
    Node 
    NPM

    - Ppara descobrir se tem os reuqisitos rodar no terminal o comando 
    node -v
    npm -v


2. Criar o projeto:
    - Rodar o comando no terminal:
    npm create vite@latest projeto-web 

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

