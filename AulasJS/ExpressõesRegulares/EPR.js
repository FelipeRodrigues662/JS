//Uma forma de encontrar padrões em uma string;
//Por exemplo: validar se só tem números;
//Em vez de criarmos funções complexas, podemos encontrar dados em texto por meio das expressões regulares;
//Também chamadas de regex;

//Criando uma Expressão regular 
// As expressões regulares são tipó de objeto
// Podemos instancia-lo de duas formas;
// New regExp e /test/;

function espressao(){

    let reg1 = new RegExp("test");
    let reg2 = /test/;

    console.log(reg2);
}

//espressao();

//Verificando padrões com regex
//Depois da definição do padrão por meio da regex;
//Utilizamos o método test() para verificar se o padrão é retornado;
//Com isso vamos receber de respostar true or false;

function teste(){

    const reg1 = /bola/;

    console.log(reg1.test("Tem bola"));
    console.log(reg1.test("Não tem"));

}

//teste();

//Conunto de caracteres
//Podemos definir um conjunto de caracteres para encontrar por ReGex;
//Basta por ente[];
//Com um traço podemos definir um intervalo também;

function CC(){
    console.log(/[123]/.test("Existe 123 aqui"));
    console.log(/[0-9]/.test("O numero 8 esta presente aqui"));
}

//CC();

//Caracters Especiais

/* 
    \d - qualquer dígito de caracter;
    \w - um caractere alfanumérico("teste");
    \s - Qualquer caracter de espaço em branco;
    \D - Caracter que não são dígitos
    \W - Caracter não alfanumérico
    \S - Caracter que não seja espaço em branco
    . - caracte, menos nova linha
*/

function caracter(){

    const pontoRegex = /./;

    console.log(pontoRegex.test("asd"));
    console.log(pontoRegex.test(" "));
    console.log(pontoRegex.test("123"));
    console.log(pontoRegex.test("123sad"));

    console.log("\n");
    const dRegax = /\d/ //[0-9]

    console.log(dRegax.test("asd"));
    console.log(dRegax.test(" "));
    console.log(dRegax.test("123"));
    console.log(dRegax.test("123sad"));

    console.log("\n");
    const dRegax2 = /\D/; //[~0-9]

    console.log(dRegax2.test("asd"));
    console.log(dRegax2.test(" "));
    console.log(dRegax2.test("123"));
    console.log(dRegax2.test("123sad"));
    
    console.log("\n");
}

//caracter();

//Teste de Regex

function testRegex(){

    const ano = /\d\d\d\d/;

    console.log(ano.test("05"));
    console.log(ano.test("2002"));
    console.log(ano.test("opa"));

    const palavraTresLetras = /\w\w\w/;

    console.log(palavraTresLetras.test("dia"));
    console.log(palavraTresLetras.test("ano"));
    console.log(palavraTresLetras.test("oi"));
    console.log(palavraTresLetras.test("teste"));

}

//testRegex();

//Operador not^
//Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not;
//Lembrando que combinações serão aceitas, o negado é apenas se batecom o set;

function notRegex(){

    let semDigito123 =  /[^123]/;
    
    console.log(semDigito123.test("123"));
    console.log(semDigito123.test("43"));
    console.log(semDigito123.test("568"));
}

//notRegex();

//Operador plus + 
//Siginifica que vai ter um elemento se repetindo várias vezes indefinidamente

function plusRegex(){

    const quantidadeDeDigitosAcimaDe3 = /\d+/;

    console.log(quantidadeDeDigitosAcimaDe3.test("1234"));
    console.log(quantidadeDeDigitosAcimaDe3.test("123"));
}

//plusRegex();

//Operador Question ?

//Faz com que o dígito anterior seja opcional:

function questionRegex(){

    const opcional = /Prova\s?\d?/;

    console.log(opcional.test("Prova"));
    console.log(opcional.test("Prova 1"));
    console.log(opcional.test(""));
}

//questionRegex();

//Operador de Precissão

//Inserur o número de ocorrência entre {};

function precissaoRegex(){

    const telf = /\d{4,5}-\d{4}/ ;

    console.log(telf.test("4004-5050"));
    console.log(telf.test("99999-8080"));
    console.log(telf.test("999-999"));
    console.log(telf.test("9999-9"));

    //Os valores dentro das chaves são da quantidade de digitos que tem que ter em um número de telefone
    //Nem mais nem menos;
}

//precissaoRegex();

//Método Exec

//O método exec nos retora um objeto com algumnas informaçõessobre a regex;
//Se nada for encontrado, retorna null;

function execRegex(){

    const teste =/\d+/;
    
    console.log(teste.exec("Tem o número 100"));
    console.log(teste.exec("Não tem"));

}

//execRegex();

//Método Match

//O método match funciona de forma similar ao exec;

function matchRegex(){

    const frase = "O número 100 está aqui".match(/\d+/);
    const frase2 = "O número não está aqui".match(/\d+/);

    console.log(frase);
    console.log(frase2);
}

//matchRegex();

//Choice Pattern

//Podmeos colocar uma instrução na regex que funciona como um Ou( || ) das condicionais;

function choicePattern(){

    const frutas = /\d+ (bananas|maçã|laranjas)/;
    
    console.log(frutas.test("10 bananas"));
    console.log(frutas.test("10 batatas"));
    console.log(frutas.test("5 laranjas"));
}

//choicePattern();

function validarDominios(){

    const validar = /www.\w+\.com|com.br|org.br/;

    console.log(validar.test("www.google.com"));
    console.log(validar.test("www.google.com.br"));
    console.log(validar.test("www.google.org.br"));
    console.log(validar.test(".google.com"));
    console.log(validar.test("www.google."));
    
}

//validarDominios();

function validarEmail(){

    const validar = /\w+@\w+\.\w+/;

    console.log(validar.test("felipe@hotmail.com"));
    console.log(validar.test("felipe@hotmail.com.br"));
    console.log(validar.test("felipe.rod00@hotmail.com"));

}

//validarEmail();

function dataNacimento(){

    let validar = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

    console.log(validar.test("07/06/2003"));
    console.log(validar.test("07/06/20"));
    console.log(validar.test("7/6/2003"));
    console.log(validar.test("30/02/1999"));
}

//dataNacimento();