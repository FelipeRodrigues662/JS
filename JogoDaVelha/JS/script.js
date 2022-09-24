let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelector('#buttonsContainer button');
let messageText = document.querySelector('#mesage');
let messageContainer = document.querySelector('#mesage p');
let secondPlayer;

//Count
let player1 = 0;
let player2 = 0;

//Ad event click

for(let i = 0 ; i < boxes.length ; i++){
    //quando clicar na caixa
    boxes[i].addEventListener('click', () =>{

        let el = checkEl(player1, player2);

        //Verifica se tem algo na box
        if(boxes[i].childNodes.length == 0){

            let cloneEl = el.cloneNode(true);
            boxes[i].appendChild(cloneEl);

            //Computar jogada
            if(player1 == player2){
                player1++;
            }
            else{
                player2++;
            }
        }

        winCondition();

    });
}

//Selecionar o jogador;
function checkEl(player1, player2){

    if(player1 == player2){
        el = x;
    }
    else{
        el = o;
    }

    return el;
}


function winCondition(){

    let b1 = document.getElementById('box1');
    let b2 = document.getElementById('box2');
    let b3 = document.getElementById('box3');
    let b4 = document.getElementById('box4');
    let b5 = document.getElementById('box5');
    let b6 = document.getElementById('box6');
    let b7 = document.getElementById('box7');
    let b8 = document.getElementById('box8');
    let b9 = document.getElementById('box9');

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child == 'x' && b2child == 'x' && b3child =='x'){
            declareWinner('x');
        }
        else if(b1child == 'o' && b2child == 'o' && b3child =='o'){
            declareWinner('o');
        }
    }

    else if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if(b4child == 'x' && b5child == 'x' && b6child =='x'){
            declareWinner('x');
        }
        else if(b4child == 'o' && b5child == 'o' && b6child =='o'){
            declareWinner('o');
        }
    }

    else if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b7child == 'x' && b8child == 'x' && b9child =='x'){
            declareWinner('x');
        }
        else if(b7child == 'o' && b8child == 'o' && b9child =='o'){
            declareWinner('o');
        }
    }

    else if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x' && b5child == 'x' && b9child =='x'){
            declareWinner('x');
        }
        else if(b1child == 'o' && b5child == 'o' && b9child =='o'){
            declareWinner('o');
        }
    }

    else if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child == 'x' && b5child == 'x' && b7child =='x'){
            declareWinner('x');
        }
        else if(b3child == 'o' && b5child == 'o' && b7child =='o'){
            declareWinner('o');
        }
    }

    //Deu velha

    let counter = 0;

    for(let i = 0 ; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9){
        console.log("Deu Velha");
    }
}

// Limpa o Jogo, declara o vencedor e atualiza o placar

function declareWinner(winner){

    let sscoreBoardX = document.getElementById('scoreBoard1');
    let sscoreBoardO = document.getElementById('scoreBoard2');
    let msg = '';

    if(winner == 'x'){
        sscoreBoardX.textContent = pasertInt(sscoreBoardX.textContent) + 1;
        msg = "O jogador 1 venceu";
    }
    else if(winner == 'o'){
        sscoreBoardO.textContent = pasertInt(sscoreBoardO.textContent) + 1;
        msg = "O jogador 2 venceu";
    }
    else{
        msg = "Deu Velha";
    }

    // Exibe Msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');
}