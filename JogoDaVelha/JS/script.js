let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelector('#buttonsContainer button');
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