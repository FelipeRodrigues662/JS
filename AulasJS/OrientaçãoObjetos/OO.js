//Metodos
//Propriedades Que servem como funções;
//Ações dentro dos objetos;
//Chamanos que nem funções;

function mehtodos(){

    let cachorro = {
        latir: function(){
            console.log("Au Au");
        }
    }

    cachorro.latir();
}
//mehtodos();

//Mais sobre Métodos;
//Normalmente meotodos interagem com os objetos;
//Até mundando os valores das suas propriedades para coresponder a lógica do programa desenvolvido;

function moreMehtodos(){

    let pessoa = {
        nome: '',
        setNome: function(novoNome){
            this.nome = novoNome;
        },
        getNome: function(){
            return this.nome;
        }
    }

    pessoa.setNome("Felipe");

    console.log(pessoa.getNome());
}

//moreMehtodos();

//Prototypes
//Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procura no prototype deste objeto;
//O proto type de um objeto criado do zero é o Object, que tem os mértodos nativos da linguagem;

function prototipos(){

    let pessoa = {
        maos: 2
    }

    console.log(Object.getPrototypeOf(pessoa));
    console.log(Object.getPrototypeOf(pessoa)== Object.prototype);
}

//prototipos();

//Mais sobre prototypes;
//Quando criamos um objeto a partir de um outro, o vase será o prototype;
//Ele herdará tanto os métodos e propriedades de Object(Prototype base);
//Quanto os do objeto base para este novo;

function morePrototipos(){

    let pessoa = {
        maos: 2
    }

    let pessoaNova = Object.create(pessoa);

    console.log(pessoaNova.maos);
    console.log(Object.getPrototypeOf(pessoaNova)== pessoa);
}

//morePrototipos();

//Classes;
//O prototype do JavaScript pode ser chamado de classe;
//Pois nas outras linguagens uma Class é um molde de um objeto;
//Ou seja, podemos criar diversos objetos em cima de  um prototype;

function Classes(){

    let cachorro = {
        raca: 'SRD',
    }

    let pastorAlemao = Object.create(cachorro);
    pastorAlemao.raca = 'Pastor Alemão';
    console.log(pastorAlemao.raca);
}

//Classes();

//Constructor:
//Construtores são formas de instancias uma classe em uma linguagem de progrmação;
//Instaciar == Criar um Objeto
//No construtor podemos definir propriedades;

function construtor(){
    
    function criarCachorro(raca){
        let cachorro = Object.create({});
        cachorro.raca = raca;
        return cachorro;
    }

    let dorberman = criarCachorro('Doberman');

    console.log(dorberman.raca);
}

//construtor();

//Classes: Constructor por NEW
//Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também;
//This aponta para 
function newConstrutor(){

    function cachorro(raca){
        this.raca = raca;
    }

    let husky = new cachorro('Husky');

    console.log(husky.raca);
}

//newConstrutor();

//Classes: Constructor com Métodos;
//Além de propriedades, podemos criar a classe base já com métodos;
//Basta definir ao prototype o métodos desejado;

function ConstrutorMetodos(){

    function cachorro(raca){
        this.raca = raca;
    }

    cachorro.prototype.uivar = function(){
        console.log('Auuuuuuuuuuuuuuuuuuuuu');
    }

    let pug = new cachorro('Pug');

    console.log(pug.raca);
    pug.uivar();
}

//ConstrutorMetodos();

//Constructor ES6
//Com a versão ES6 uma possibilidade de criar uma classe(objeto)com construtor foi adiciona;
//Então não precisamos mais criar por meio de uma função;

function ES6Construtor(){

    class cachorro{
        constructor(raca){
            this.raca = raca;
        }
    }

    let labrador = new cachorro('Labrador');

    console.log(labrador.raca);

}

//ES6Construtor();

//Override
//Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no Prototype;
//Podemos Substituir a do protorype;

function Override(){

    class cachorro{
        constructor(raca){
            this.raca = raca;
        }
    }

    let poodle = new cachorro('Poodle');

    cachorro.prototype.raca = 'SRD';

    console.log(poodle.raca);
    console.log(cachorro.prototype.raca);
}

//Override();

//Mais Sobre classes
//Não podemos adicionar propriedades na classe, só via prototype;
//A classe só aceita métodos;

function moreClasses(){

    class cachorro{
        constructor(raca){
            this.raca = raca;
        }

        latir(){
            console.log("Au Au");
        }
    }
    
    cachorro.prototype.patas = 4;

    let labrador = new cachorro('Labrador');

    console.log(labrador.patas);
    labrador.latir();


}

//moreClasses();

//Symbols
//Propriedades únicas, que não podem ser alteradas e nem criadas duas vezes;
//Podemos utilizar como um constante, só que para propriedades de objeto;

function simbols(){

    class cachorro{
        constructor(raca){
            this.raca = raca;
        }
    }

    let patas = Symbol();

    cachorro.prototype[patas] = 4;

    let golden = new cachorro('Golden Retriver');

    console.log(golden[patas]);
}

//simbols();

//Getters e Setters
//Get: serve ára resgatar o valor de uma propriedade;
//Set: Serve para alterar o valor de uma propriedade;

function GetSet(){

    class cachorro{
        constructor(raca){
            this.raca = raca;
        }

        get verRaca(){
            return 'A raça é ' + this.raca;
        }

        set novaRaca(value){
            this.raca = value;
        }
    }

    let pastorAlemao = new cachorro('Pastor Alemão');

    console.log(pastorAlemao);

    pastorAlemao.novaRaca = 'Pastor';

    console.log(pastorAlemao.verRaca);
}

//GetSet();

//Herança
//Uma classe pode herdar propriedades de outra classe por herança;
//Para isso utilizamos extends;

function heranca(){

    class mamifero{
        constructor(patas){
            this.patas = patas;
        }
    }
    class cachorro extends mamifero{
        constructor(patas, raca){
            super(patas, patas);
            this.raca = raca;
        }
    }

    let pug = new cachorro(4, 'Pug');
    console.log(pug);

}

//heranca();

//Instanceof;
//Podemos Verificar que é o pai do objeto utilizando o instanceof

function instanceOf(){

    class mamifero{
        constructor(patas){
            this.patas = patas;
        }
    }
    class cachorro extends mamifero{
        constructor(patas, raca){
            super(patas, patas);
            this.raca = raca;
        }
    }

    let pug = new cachorro(4, 'Pug');
    console.log(pug);

    console.log(pug instanceof mamifero); 
}

//instanceOf();