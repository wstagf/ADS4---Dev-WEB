react - framework para construção de interfaces de usuário

npm, npx, só estarão disponiveis se o Node.js estiver instalado no sistema. O Node.js é um ambiente de execução JavaScript que permite executar código JavaScript fora do navegador. Ele inclui o npm, que é o gerenciador de pacotes para JavaScript, e o npx, que é uma ferramenta para executar pacotes do npm sem precisar instalá-los globalmente.

npm - gerenciador de pacotes do node.js(Node Package Manager)

npx - executa pacotes do npm sem precisar instalá-los globalmente

create-react-app - ferramenta de linha de comando para criar aplicativos React com uma configuração pré-definida


sintaxe:
npx create-react-app nome-do-projeto




como criar um projeto React usando o create-react-app:
1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja criar o projeto.
3. Execute o comando: npx create-react-app nome-do-projeto
4. Aguarde enquanto o create-react-app configura o projeto e instala as dependências necessárias.
5. Após a conclusão, navegue até o diretório do projeto: cd nome-do-projeto
6. Inicie o servidor de desenvolvimento: npm run start ou abrir no vscode com o comando "code ." e depois abrir o terminal no vscode e rodar 
"npm run start"




A estrutura básica de um projeto React criado com o create-react-app inclui os seguintes arquivos e pastas:
- node_modules/: pasta onde estão armazenadas as dependências do projeto.
- public/: pasta que contém arquivos públicos, como o index.html.
- src/: pasta onde estão os arquivos de código-fonte do projeto, incluindo componentes React, arquivos CSS e JavaScript.
- package.json: arquivo que contém as informações do projeto e as dependências.



dentro da pasta src, o arquivo App.js é o componente principal do aplicativo React. Ele é o ponto de entrada para a construção da interface do usuário e pode ser editado para criar a estrutura e o conteúdo do aplicativo. O App.js geralmente importa outros componentes e os renderiza para criar a interface do usuário completa.



componente react minimo 

function App() {
  const nome = "Senai";
  return (
    <div className="App">
      <h1>{nome} Aula Web</h1>
    </div>
  );
}

export default App;

Neste exemplo, o componente App é uma função que retorna um elemento JSX. O JSX é uma sintaxe que permite escrever código semelhante ao HTML dentro do JavaScript. O componente renderiza um título h1 que exibe o valor da variável nome, que é "Senai". O componente é exportado para ser usado em outros arquivos do projeto.



para renderizar uma lista de números usando o método map, você pode fazer o seguinte:

const lista = [1, 2, 3, 4, 5];

{lista.map((numero) => {
    return (<li>numero</li>);
  }) }  



a partir da palavra return 
 tudo o que está dentro do () 
 será utilizado como CODIGO HTML 

 caso voce queira usar scripts novamente, 
 deve abrir um { e fechar com }




o react implementa IMUTABILIDADE, ou seja, os dados não podem ser alterados diretamente. Em vez disso, para atualizar o estado de um componente, é necessário criar uma nova cópia do estado com as alterações desejadas. Isso ajuda a garantir que o estado seja atualizado de forma previsível e eficiente, evitando efeitos colaterais indesejados.




RESUMO

{nome} - Interpolação de variáveis em JSX (somente leitura)


onClick={alerta} - Atribuição de eventos em JSX (somente leitura)


useState - Hook para gerenciamento de estado em componentes funcionais (leitura e escrita) pois o react implementa imutabilidade, ou seja, os dados não podem ser alterados diretamente. Em vez disso, para atualizar o estado de um componente, é necessário criar uma nova cópia do estado com as alterações desejadas. Isso ajuda a garantir que o estado seja atualizado de forma previsível e eficiente, evitando efeitos colaterais indesejados.



A interpolacao pode conter regra de negocio

{
  // tudo o que estiver dentro do {} sera interpretado como codigo javascript, calculos, regras de negocio, busca no banco de dados, etc
  lista.map((n) => {
    // aqui dentro pode ser feito qualquer tipo de regra de negocio, calculo, etc
    return (<li>{numeroTabuada} x {n + 1} = { numeroTabuada * (n + 1)}</li>);
  })
}    


