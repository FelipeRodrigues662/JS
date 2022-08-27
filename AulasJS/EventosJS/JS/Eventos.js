//O que são eventos

//Ações condicionadas a algum tipo de resposta feita pelo usuário;
//Por exemplo: clicks, apertar alguma tecla ou até movumento do mouse;
//Podemos alterar lógica a essas ações do usuário;
//Por meio de handlers;

//Criando um evento

//Devemos alterar o evento a um elemento, por exemplo um botão;
//Depois de inseri um listener e o tipo do evento como argumento;
//Ai o elemento responderá por este evento e, obviamente, os outros da página não;

function criarEvento(){

    let btn = document.querySelector("#follow");

    btn.addEventListener('click', () => {
        console.log("follow");
        btn.style.backgroundColor = "red";
    });

}

//criarEvento();

//Removendo Eventos

//Da mesma forma que podemos adcionar eventos, podemos remover quando acharmos necessário;
//Para isso utilizamos o métode .removeEventListner, onde passamos o evento e a função que o evneto está
//executando;

function removeEvento(){
    let btn = document.getElementById("follow");

    function msg() {
        console.log("clicou");
    }

    btn.addEventListener('click', msg);

    setTimeout(() => {
        btn.removeEventListener('click', msg);
    }, 3000);
}
//removeEvento();

//Objeto do Evento

//Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento;
//Ele contém propriedades que podem sser utilizadas a nosso favor;
//O objeto é criado pelo JS automaticamente;

function OE(){

    function msg(e){
        console.log(e);
    }

    let btn = document.getElementById('follow');

    btn.addEventListener('click', msg);
}
//OE();

//Propagação

//Quando não definimos um elemento muito bem(seletor bando) ou um elemento que está dentro de outro evento;
//Pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos uma duplicação;
//Por isso temos um método que para esta propagação e resolver este ploblema, o .stopPropagation;

function propagacao(){

    let p = document.getElementById('follow');

    let btn = document.getElementById('try_the_next_one');

    p.addEventListener('click', (e) => {
        console.log('click1');
        e.stopPropagation();
    });

    btn.addEventListener('click', () => {
        console.log('clik2');
    })
}
//propagacao();

//Ações Default

//Muitos Elementos/Teclas já tem ações pré-definidas, como clicar num link nos leva a outra página;
//Podemos para este evento default, criar uma lógica diferente para o elemento em qustão;

function actionDefault(){

    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let p = document.querySelector('p');
    let a = document.querySelector('#a');


    function msg(e){
        console.log("Clicou");
        e.stopPropagation();
    }

    btn1.addEventListener('click', msg);

    btn2.addEventListener('click', (event) => {
        console.log(event);
    });

    p.addEventListener('click', () => {
        console.log('Clicou no paragrafo');
    });

    a.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Não vai mudar de link")
    });
}
//actionDefault();

//Eventos de telca(key event)

//Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown;
//Podemos realizara ações nestes eventos também;
//Keyup é quando soltamos a tecla;
//Keyddown é quando apertamos;

function eventoTecla(){

    window.addEventListener('keydown', function(e){

        if(e.key == 'q'){
            console.log('Apetou a letra Q');
        }
        else if(e.key == 'Enter'){
            console.log('Apertou Enter');
        }
    });

    window.addEventListener('keyup', (e) => {

        if(e.key == 'Enter'){
            console.log('Soltou o enter');
        }
    });
}
//eventoTecla();

//Outros Eventos de Mouse

//No mouse temos também eventos como mousedown e mouseup, semelhante aos das teclas;
//Dbclick para ativar com dois cliques;

function eventoMouse(){

    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('mousedown', () => {
        console.log("Apertou o botão");
    });

    btn1.addEventListener('mouseup', () => {
        console.log("Soltou o botão");
    });

    btn2.addEventListener('dblclick', () => {
        console.log("Clicou duas Vezes");
    });

    btn2.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        console.log("Apertou com botão Equerdo");
    });

}
//eventoMouse();

//Movimento do Mouse

//Podemos ativar eventos com a movimentação do mouse também;
//O nome dele é mousemove;
//Através desse evento podemos detectar a posição do ponteiro do mouse na tela;

function movimentoMouse(){
    window.addEventListener('mousemove', (e) =>{

        console.log(e.x);
        console.log(e.y);
    });
}
//movimentoMouse();

//Eventos por scroll

//Podemos atrelar evento ao scroll da tela também, pelo evento scroll;
//Podemos criar um elemento assim que o scroll atingir a posição x;

function eventosScroll(){

    window.addEventListener('scroll', (e) => {
        if(window.pageYOffset > 1000){
            console.log('Ativou');
        }
    })
}
//eventosScroll();

//Eventos por foco

//Quando focamos em um elemento ou sáimos dele, podemos também atrelar um evento a esta ação;
//Focus para quando um elemento recebe foco e blur quando ele perde;

function eventosFoco(){
    let input = document.querySelector('input');

    input.addEventListener('focus', () => {
        console.log("Entrou o Foco");
    });

    input.addEventListener('blur', () => {
        console.log("Saiu do Foco");
    })

}
//eventosFoco();

//Evento de Carregamento

//Podemos atrelar um evento quando a página carrega, pelo evento load;
//E antes do usuário fechar a página pelo evento beforeunload;

function carregamento(){
/*  window.addEventListener('load', () => {
        alert("Assine nossos termos de usso");
    });
*/
    window.addEventListener('beforeunload', function(e) {
        event.returnValue = null;
    });
}
//carregamento();

//Debounce

//Um evento que dispara múltiplas vezes pode ser um problema para a o computado do cliente;
//Por isso podemos faz um debounce, que é uma suavizador de evento, para não chmar o mesmo tantas vezes;

function debounce(){

    window.addEventListener('mousemove', (e) => {

    clearTimeout(timeout);

    let timeout = setTimeout(() => {
            console.log(e.x);
        },2000);
    });
    
}
debounce();