'use strict';

let userNum;
let scrtNum = Math.ceil(Math.random()*20);
let score = 20;
console.log('secret number is ' + scrtNum);

let check = document.querySelector('.check').addEventListener('click',function(params) {
    console.log('button is clicked');
    userNum = Number(document.querySelector('.guess').value);

    if(!userNum){
        document.querySelector('.message').textContent = 'No number was selected.'
    }
    else if(userNum == scrtNum){
        document.querySelector('.message').textContent = `you guessed correct answer ${userNum}`;
    }

    else if(userNum > scrtNum){

        if(score > 1){
            document.querySelector('.message').textContent = "High guess";
            score--;
            document.querySelector('.label-score').innerHTML = `💯 Score: ${score}`;
        }
        else{
            document.querySelector('.message').textContent = "Computer won!";
            document.querySelector('.label-score').innerHTML = 'Score : 0';
        }
        
    }
    else if(userNum < scrtNum){
        if(score>1){
            document.querySelector('.message').innerHTML = 'Low guess';
            score--;
            document.querySelector('.label-score').innerHTML = `💯 Score: ${score}`;
        }
        else{
            document.querySelector('.message').textContent = "Computer won!";
            document.querySelector('.label-score').innerHTML = 'Score : 0';
        }
    }
}) 
