let output = document.querySelector('#output');
let number = document.querySelector('#number');

document.querySelector('#checkButton').addEventListener('click', checkValue);
document.body.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') checkValue();
});

let max = 100;
let timerId = null;
let elapsed = 0;

let randomValue = Math.floor(Math.random() * 101);
let attempt = 0;

timerId = setInterval(() => elapsed++, 1000);

output.innerHTML = 'Спробуй вгадати. Введіть значення.';


function checkValue() {
    attempt++;
    let currentValue = number.value;

    if (currentValue > randomValue) {
        output.innerHTML = `Я загадав число менше ніж ${currentValue}`;
    } else if (currentValue < randomValue) {
        output.innerHTML = `Я загадав число більше ніж ${currentValue}`;
    }
    if (currentValue == randomValue) {
        clearInterval(timerId);
        output.innerHTML = `Вірно! ${currentValue} - загадане число. Ви вгадали з ${attempt}ї спроби за ${elapsed} сек.`;
        setTimeout(() => {
            window.location.reload();
        }, 10000);
    }
    number.value = '';
}
