O javascript é uma linguagem de programação 
que é interpretada pelo container_web (navegador, node, apache, nginx, iss)


container_web é um programa que 
le o html, o css, o javascipt
e faz a tela aparecer, ficar colorida e ser animada


javascript é case-sensitive

javascript não faz distincao entre 
    aspas simples '  e  duplas "


até proximo de 2015 o ponto-e-virgula era obrigatorio,
    agora nao é mais...




var é a palavra para declarar variavies,
    porem var sofre perca de escopo
    sofre alteracao fora do contexto

    entao, a paritr de aprox. 2015 surgiu o LET

    var continua funcionando. mas é dessaconselhado



const é a palavra para declarar uma variavel 
    que nao podera ser alterada, é uma constantante



antigamente as funcoes precisavam da palara function

ex. 

// ANTIGAMENTE
var calcular = function square(number) {
  return number * number;
}


//moderno
calcular = square(number) {
  return number * number;
}

// arrow functions
// funcoes anonima

() => {
    // seu codigo aqui
}


funcoes podem ter retorno ou nao. o javascipt nao checa




a linguagem Javascript é fracamente tipada
isso significa que podemos armazenar texto 
e depois alterar para numeros


os tipos primitivos sao 

'Number' = equivalem ao int e o float
'String' = é uma cadeia de texto
'Boolean' = verdadeiro ou falso


para fazer conversao de tipos usamos 

parseInt("10")
parseFloat("89.90")


===  é igual, e é o mesmo tipo
==  é igual
!=  diferente 
!   Nao
>   maior que
<   menor que
<=  menor ou igual
<=  maior ou igual



if(variavel) {
    // fazer caso sucesso 
} else {
    // fazer caso erro
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch


var estudar = "javascript"
switch(idade) {
    case "javascript": 
        console.log('web')
        break
    case "":
        // seu codigo aqui
        break
    default:
        // seu codigo aqui
        break
}


for (int i = 0; i< 10; i++ ){
    // seu codigio aqui
}

ganhei = false
while(!ganhei) {
    // seu codigo aqui;
    if(6 == "") {
        ganhei = true
    }
}

do {
    // seu codigo aqui;
} while (j < 100)




["Thiago", "Matheus"] // isso é um array


{ 
    "nome": "Thiago",
    "idade": 39
}  
// isso é um json  Objeto


[
    {
        "empresa": "Senai",
        "dataInicio": "01/01/2025"
    },
    {
        "empresa": "Puc",
        "dataInicio": "01/06/2025"
    },
]
