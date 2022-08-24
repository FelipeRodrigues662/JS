//Programação assíncrona

//A programação assíncrona trabalha nesta questão, ações podem ser executadas ao tempo todo sem uma 'fila';
//Exemplo: usuário está no checkout, manda salvar seu endereço na conta, mas pode prosseguir para a 
//Finalização sem recarregar a página, pois adicionar endereço ocorre de forma assíncrona;

//Callbacks

//Umas das vertentes a prog. Assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks;
//Callback é uma função que faz uma ação após algum acontecimento no código;
//Podemos realizar um callback com a função "setTimeout";

function callBack(){


    setTimeout(function(){
        console.log("1");
    }, 1000).toExponential

    setTimeout(function(){
        console.log("2");
    }, 2000).toExponential

    setTimeout(function(){
        console.log("3");
    }, 3000).toExponential
}

//callBack();

//Promises

//As promises são ações assíncronas que podem produzir um valor em algum momento no código;
//Uma forma de dizer a linguagem que um valor poder estar presente em um futuro do código;
//O objeto das promises é promise, resolve é o método que resoleve promise, o then é o que faz ela poder
//executada em um ponto futuro

function promises(){
    let promessa = Promise.resolve(4+8);

    console.log("Algum código");

    promessa.then((value) => console.log(`A soma eh ${value}`));
}

//promises();

//Falha nas Promises 

//Uma promise pode falhar, podmeos reter esse erro com um método chmado catch;
//Com ele podemos exibir o erro no console, por exemplo, e fazer o debug no código;

function falha(){

    let promessaErrada = Promise.resolve(new Error("Algo deu Errado"));

    promessaErrada
        .then((value) => console.log(value))
        .catch(reason => console.log(`Erro: ${reason}`));
}

//falha();

//Rejeitando Promises

//ALém do resolve, há o metodo reject;
//que é quando determinada lógica não satisfaz nosso programa, então podemos ir para outra com o reject
//em vez do resolve;
//Resolve e reject terminam a promise, ou seja, não podemos chamar mais o then, por exemplo;

function rejeitar(){

    function verificarAlgo(num){
        return new Promise((resolve, reject) => {
            if(num == 2)
                resolve(console.log("O número é 2"));
            else
                reject(new Error("Falhou"));
        });

    }

    verificarAlgo(3);
    verificarAlgo(2);
}

//rejeitar();

//Resolvendo Várias promises

//Com o método all, podemos resolver várias promessas de uma vez só;
//Ou seja passamos elas por attay e quando a última for resolvida, receberemos a resposta;

function morePromises(){

    const p1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(100);
        },2500);
    });

    const p2 = Promise.resolve(5);

    const p3 = new Promise(function(resolve, reject){
        resolve(10);
    });

    Promise.all([p1,p2,p3]).then((values) => console.log(values));
}

//morePromises();

//Async Functions

//Podemos ciar funções assíncronas com a palavra reservada async;
//Elas retornam uma promise;
//Se retornar algo, a proomessa é reolvida, se der algumar exception a promesssa é rejeotada;

function newAsync(){

    async function somar(a, b){
        return a + b;
    }

    console.log(somar(2,2));

    somar(2,2).then(function(value){
        console.log(value);
    });
}

//newAsync();

//Await 

//Nas sync functions, podemos determinar um instrução await;
//Que vai esperar uma promise ser resolvida, para apresentar os resultados;

function newAwait(){

    function somaComDelay(a, b){
        return new Promise(resolve => {
            setTimeout(function(){
                resolve(a + b);
            }, 4000);
        });
    }

    async function soma(a, b, c, d){
        let x = somaComDelay(a, b);
        let y = somaComDelay(c, d);

        return await x + await y;
    }

    soma(2, 4, 6, 8).then(value => console.log(`X + Y = ${value}`));
}

//newAwait();

//Generators

//Generators funcionam semelhantes as promises;
//Onde ações podem ser paradas e continuadas depois;
//Caracterizados pelo function* e yield;
//O yield pode salvar o estado da variável;

function generator(){

    function* genTest(){
        let id = 0;

        while(true){
            yield id++;
        }
    }

    let criarId = genTest();

    console.log(criarId.next().value);
    console.log(criarId.next().value);
}

//generator();