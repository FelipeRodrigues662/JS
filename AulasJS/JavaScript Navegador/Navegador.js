//Web Protocols

//Um protocolo é uma forma de comunicação entre computadores através da rede;
//O HTTP, serve para nós solicitarmos arquivos, imagens e etc;
//SMTP, protocolos para enviar e-mail;
//TCP, protocolo de transferência;

//URL

//Cada arquivo que carrega no navegador é nomeado por uma URL;
//A URL pode ser dividida em três partes: Protocolo, servidor e arquivo;
//EX: http://www.google.com.br/index.html;
//http = protocolo;
//www.google.com.br = servidor(DNS para um IP);
//index.html = arquivo

//HTML 

//Linguagem de marcação
//Reponsavle pelos textos e elemesntos que vemos na tela ao acessar uma pagina web;
//As tags do html criam títulos, parágrafos, imagens, listas e etc;
//Uma tag e definida por <> </>;
//Algumas Tags não possuem Fechamento;

//Todo Documento HTML tem sempre duas partes importantes HEAD e BODY;
//O HEAD serve para configurações do documento, como links de folha de estilo ou até de scripts de JS;
//Tags de configuração, meta, link;
//O BODY para os elementos(tags), ou seja, a parte visual;
//Tags do BODY, p, h1, div, ul, li etc;

//----------------------------------------------------------------------------------------------------------//

//HTML e JS

//Podemos utilizar JS no HTML por meio da tag script;
//Ou linkar um arquivo.js por mei de script com atributo src;
//Algumas tags HTML aceitam atributos qque executam JS, mas não é muito utilizado;
//Sempre que linkamos um arquivo externo, extamos chamando ele via protocolo HTTP;

//DOM(Document Object Model)

//Quando uma página web é requisitada, ela recebe um texto que é transformado em uma estrutura HTML;
//As tags vão se aninhando uma ás outras, formando uma estrutura em que elementos ficam dentro dos outros;
//Essa Estrutura tem uma representação exatamente igual para o JS cahmada de DOM;
//E por meio do JS podemos acessar cada um destes elementos HTML através do DOM;

//Podemos mudar completamente uma página HTML através do DOM;
//É possível alterar: elementos, atributos, CSS;
//Além de alterar podemos adicionar e também remover;
//Além de ser possível criar evenetos na página, como animações;

function acessar(){

    console.log(document.body);
}

//acessar();

//Árvore DOM

//O documento HTML seria a árvora completa.
//A raiz da árvore é o Document;
//Cada elemento da árvore chamados de node(nó);
//Conteúdos como texto são chamados de lead nodes;

//Movendo-se através do DOM

//Podemos acessar todos os elementos a partir de document.body;
//A partir dele vamos entrando nos childNodes;
//E depois acessando as popriedades que nos insterssam;

function move(){

    console.log(document.body);

    console.log(document.body.childNodes);

    console.log(document.body.childNodes[1].childNodes[1].innerText);
 
}

//move();

//Encontrando Elementos

//Podemos encontrar elementos de uma forma mais fácil do que se movendo pelo DOM;
//Como no HTML temos tags, calsses e ids, JS nos possibilita utilizar estas características
//para encontrar o que desejamos;
//Há alguns métodos para isto:
/* 
    .getElementsByTagName,
    .getElementById,
    .getElementsByClassName,
    .querySelector
*/

//.getElementsByTagName
function byTag(){
    console.log(document.getElementsByTagName('h1'));
    console.log(document.getElementsByTagName('p'));
}
//byTag();

//.getElementById
function byId(){
    console.log(document.getElementById('algumTexto'));
}
//byId();

//.getElementsByClassName
function byClass(){
    console.log(document.getElementsByClassName('coisa'));
}
//byClass();

//.querySelector
function byQuery(){
    console.log(document.querySelector("#containerPrincipal #algumTexto"))
}
//byQuery();

//Alterando o HTML

//Podemos mudar quase tudo através da DOM;
//Adicionar, remover e clonar elementos;
//Podemos utilizar métodos como: insertBefore,appendChild e replaceChild;
//Vamos ver em detalhes como utilizar cada um destes;

//.insertBefore
//Inser um nó antes do nó de referência do método;
//Precisamos de um elemento para ser adicionada;
//O elemento que terá o outro elemento adicionado antes dele;
//E o elemento pai destes dois;

function byInsertBefore(){
    let novoElemento = document.createElement('p');
    //Criando uma variavel e depois criado um node de texto;
    let texto = document.createTextNode("Felipe");
    //seleciono o novo elemento e atribuo o node texto a e ele;
    novoElemento.appendChild(texto);

    let elementoAlvo = document.querySelector('#algumTexto');
    let elementoPai = document.querySelector('#containerPrincipal')

    elementoPai.insertBefore(novoElemento, elementoAlvo);
}
//byInsertBefore();

//.appendChild
//Adciona um nó após todos os elementos do elemento pai especificado;
function byAppendChild(){
    let novoElemento = document.createElement('p');
    let texto = document.createTextNode("Felipe2");
    
    novoElemento.appendChild(texto);

    let p = document.querySelector('#paragrafoPrincipal');
    let pai = p.parentNode;

    pai.appendChild(novoElemento);
}
//byAppendChild();

//.replaceChild
//Repõe um antigo elemento no DOM, com um novo;

function byReplaceChild(){
    let newHeading = document.createElement('h1');
    newHeading.textContent = "Novo Texto";

    let oldHeading = document.getElementById("oldHeading");

    let pai = oldHeading.parentNode;

    pai.replaceChild(newHeading, oldHeading);

}
//byReplaceChild();

//Criando nós de Texto
//Podemps criar um nó de texto puro e inserir em um elemento;

function cirarTexto(){
    let novoElemento = document.createElement('p');
    let texto = document.createTextNode("Este é o Texto");

    novoElemento.appendChild(texto);

    let elementoAlvo = document.querySelector('#algumTexto');
    let elementoPai = document.querySelector('#containerPrincipal')

    elementoPai.appendChild(novoElemento, elementoAlvo);

}
//cirarTexto();

//Nós de Elemento
//Podemos criar um nó de elemento co o createElement, e deoius inseri no HTML;

function criarLista(){

    let lista = document.createElement('ul');

    for(i = 0 ; i < 5 ; i++){

        let item = document.createElement('li');

        let texto = document.createTextNode(`Texto Lista ${i + 1}`);

        item.appendChild(texto);

        lista.appendChild(item);

    }

    let container = document.getElementById('containerPrincipal');

    container.appendChild(lista);
}
//criarLista();

//Modificando e lendo atributos

//Podemos resgatar o valor de um atributo ou trocar com oJS;
//Por exemplo o href de um "a" ou o src de um elemento "img";
//.getAttribute pega o valor;
//setAttribute atualiza o valor;

function altAtributos(){

    let a = document.querySelector("footer a");

    console.log(a.getAttribute("href"));

    let link = 'https://www.google.com';

    a.setAttribute('href', link);
}
//altAtributos();

//Verificando altura e largura
//Com o js também é possível verificar propriedades do elemento como latura e largura

function verifiWH(){

    let elemento = document.getElementById('paragrafoPrincipal');

    console.log('largura: ' + elemento.offsetHeight); // considera as bordas
    console.log('altura: ' + elemento.offsetWidth);

    console.log('largura: ' + elemento.clientHeight); // não considera as bordas
    console.log('altura: ' + elemento.clientWidth);
}
//verifiWH();

//Posição dos Elementos

//Também é possível checar a posição do elemento na tela;
//.getBoundingClientRect
//as posiçõs de top, left, right, bottom do elemesnot e outras informações;

function position(){
    let elemento = document.getElementById('paragrafoPrincipal');

    console.log(elemento.getBoundingClientRect());
}
//position();

//Estilizando com JS
//Podemos tambémm mudar as propriedades de estilo dos elementos do HTML com o JS;
//Acessando a propriedade style podemos fazer as modificações;
//O estilo é manipulado direto na tag, ou seja, substitui o do CSS(ma maioria das vezes);

function style(){

    let p = document.getElementById('paragrafoPrincipal');

    console.log(p.style);

    p.style.color = 'red';
}
//style();

//Selecionar vários elementos com query
//Para selecionar diversos elementos com query, podemos utilizar o método querySlectorAll;
//em vez de um, podemos pegar odos os elementos semelhantes com o sleector do CSS;

function selectorAll(){

    let todosPs = document.querySelectorAll('p');

    console.log(todosPs);

    todosPs[1].style.color = "rgb(125, 50, 63)";
    console.log((todosPs.length));

}
selectorAll();






















