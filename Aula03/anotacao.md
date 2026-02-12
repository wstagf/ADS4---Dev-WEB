CSS, Folha de Estilo em Cascata 
     (Cascading Style Sheets)

Aplicar Estilo no html

- O CSS é uma linguagem de estilo utilizada para descrever a apresentação de um documento HTML. Ele permite controlar a aparência dos elementos em uma página web, como cores, fontes, espaçamento e layout.



    O valor da propriedade color
    pode ser: 
    * nome da cor (red, blue, green, etc.)
    * código hexadecimal (#FF0000 para vermelho, #0000FF para azul, etc.) 
    * código RGB (rgb(255, 0, 0) para vermelho, rgb(0, 0, 255) para azul, etc.)






HEXADECIMAL varia de 00 a FF (0 a 255 em decimal)

RR GG BB 
88 00 88

00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 0A, 0B, 0C, 0D, 0E, 0F, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1A, 1B, 1C, 1D, 1E, 1F, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 2A, 2B, 2C, 2D, 2E, 2F, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 3A, 3B, 3C, 3D, 3E, 3F, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 4A, 4B, 4C, 4D, 4E, 4F, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 5A, 5B, 5C, 5D, 5E, 5F, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 6A, 6B, 6C, 6D, 6E, 6F, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 7A, 7B, 7C, 7D, 7E, 7F, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 8A, 8B, 8C, 8D, 8E, 8F, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 9A, 9B, 9C, 9D, 9E, 9F, A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, AA, AB, AC, AD, AE, AF, B0, B1, B2, B3, B4, B5, B6, B7, B8, B9, BA, BB, BC, BD, BE, BF, C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, CA, CB, CC, CD, CE, CF, D0, D1, D2, D3, D4, D5, D6, D7, D8, D9, DA, DB, DC, DD, DE, DF, E0, E1, E2, E3, E4, E5, E6, E7, E8, E9, EA, EB, EC, ED, EE, EF, F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, FA, FB, FC, FD, FE e FF.



podemos utilizar o RGB para definir as cores, onde cada componente (vermelho, verde e azul) pode variar de 0 a 255. Por exemplo:
color: rgb(255, 0, 0); /* vermelho */
color: rgb(0, 255, 0); /* verde */
color: rgb(0, 0, 255); /* azul */
color: rgb(240, 67, 30); /* laranja  SENAI */

agora o numero varia de 0 a 255, onde 0 representa a ausência da cor e 255 representa a intensidade máxima da cor

essa regra de cores se aplica a todos os atributos de cor no CSS, como background-color, border-color, etc. Por exemplo:
background-color: rgb(255, 255, 0); /* amarelo */
border-color: rgb(0, 255, 255); /* ciano */
color: rgb(255, 0, 255); /* magenta */




Quando estamos falando de tamanho, podemos 
utilizar diferentes unidades de medida, como pixels (px), em (em), rem (rem), porcentagem (%), entre outras. Por exemplo:
font-size: 16px; /* tamanho da fonte em pixels */
font-size: 1.5em; /* tamanho da fonte em relação ao elemento pai */
font-size: 1rem; /* tamanho da fonte em relação à raiz do documento */
width: 20% /* largura em porcentagem */



e podemos utilizar calculos para definir tamanhos dinâmicos, utilizando a função calc(). Por exemplo:
width: calc(100% - 50px); /* largura calculada subtraindo 50 pixels da largura total */
portem nao é suportado em todas as propriedades, e nem por todos os navegadores





- O CSS pode ser aplicado de três maneiras diferentes: inline, interno e externo.


utilizamos o seguinte criterio para escolher 
se vamos utilizar o estilo inline, interno ou externo:
 - inline 
    * precisamos definir somente um elemento específico

- interno
    * queremos aplicar estilos a SOMENTE UMA PAGINA,

- externo 
    * queremos aplicar estilos a TODAS AS PAGINAS DO SITE



* inline
    utilizamos o atributo style diretamente no elemento HTML para aplicar estilos específicos a esse elemento. Por exemplo:
    <p style="color: red; font-size: 16px;">Este é um parágrafo com estilo inline.</p>

    faz com que o estilo seja aplicado apenas a esse elemento específico, e não a outros elementos semelhantes na página, neste exemplo o texto do parágrafo ficará vermelho e com tamanho de fonte 16 pixels.

    utilizamos anotação de chave-valor para definir as propriedades e seus respectivos valores. A sintaxe é a seguinte:
    chave: valor;
    ex. 
    color: red;
    font-size: 16px;



* interno
    utilizamos a tag <style> dentro do elemento <head> do documento HTML para definir estilos que serão aplicados a toda a página. Por exemplo:
    <head>
        <style>
            p {
                color: blue;
                font-size: 18px;
            }
        </style>
    </head>

    faz com que o estilo seja aplicado a todos os elementos <p> na página, neste exemplo o texto dos parágrafos ficará azul e com tamanho de fonte 18 pixels.

   



* externo
    criamos um arquivo CSS separado (por exemplo, styles.css) e vinculamos esse arquivo
    ao documento HTML usando a tag <link> dentro do elemento <head>. Por exemplo:
    <head>
        <link rel="stylesheet" href="styles.css">
    </head> 
    No arquivo styles.css, podemos definir os estilos da seguinte maneira:
    p {
        color: green;
        font-size: 20px;
    }

    faz com que o estilo seja aplicado a todos os elementos <p> na página, neste exemplo o texto dos parágrafos ficará verde e com tamanho de fonte 20 pixels.





# seletores

 - os seletores são utilizados para selecionar os elementos HTML aos quais queremos aplicar estilos. Existem diferentes tipos de seletores, como seletores de tipo, classe, ID, atributo, entre outros.

    Seletor de elemento
        p, h1, div, etc.
        ex. 
        p {
            color: red;
        }
        <p>Este é um parágrafo</p>
        Neste exemplo, todos os elementos <p> terão o texto vermelho.


    Seletor de classe
        .classe
        ex. 
        .destaque {
            color: blue;
        }
        Neste exemplo, todos os elementos com a classe "destaque" terão o texto azul.
        <p class="destaque">Este é um parágrafo em destaque</p>
        

    Seletor de ID
        #id
        ex. 
        #titulo {
            color: green;
        }
        Neste exemplo, o elemento com o ID "titulo" terá o texto verde.
        <div id="titulo">Este é um título</div> 


    


