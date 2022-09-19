const computerChoiseDisplay = document.querySelector('#computer-choise');
const userChoiseDisplay = document.querySelector('#user-choise');
const resultDisplay = document.querySelector('#result');
let computerChoise;
let UserChoise;
let result;
// const rockVariant = document.querySelector('#rock');
// const paperVariant = document.querySelector('#paper');
// const scissorsVariant = document.querySelector('#scissors');


const possibleChoises = document.querySelectorAll('button');
possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) =>{
    userChoise = e.target.textContent;
    userChoiseDisplay.innerHTML = userChoise;
    generateComputerChoise()
    getResult()
}))

function generateComputerChoise(){
    const randomNumber = Math.floor(Math.random() * possibleChoises.length + 1); 
    switch (randomNumber) {
        case 1: computerChoise = 'Камінь';
            break;
        case 2: computerChoise = 'Ножиці';
            break;
        case 3: computerChoise = 'Папір';
            break;
    }
    computerChoiseDisplay.innerHTML = computerChoise
}
function getResult() {
    if (computerChoise === userChoise){
        result = 'Нічия!'
    }
    if (computerChoise === 'Камінь' && userChoise === 'Папір') {
        result = 'Ви виграли!';
    }
    if (computerChoise === 'Камінь' && userChoise === 'Ножиці') {
        result = 'Ви програли :(';
    }
    if (computerChoise === 'Папір' && userChoise === 'Ножиці') {
        result = 'Ви виграли!';
    }
    if (computerChoise === 'Папір' && userChoise === 'Камінь') {
        result = 'Ви програли :(';
    }
    if (computerChoise === 'Ножиці' && userChoise === 'Камінь') {
        result = 'Ви виграли!';
    }
    if (computerChoise === 'Ножиці' && userChoise === 'Папір') {
        result = 'Ви програли :(';
    }
    resultDisplay.innerHTML = result;
}