/* details-product quantity - cambio de cantidad ingresada por user*/
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
const userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber
    console.log(userInputNumber);
})

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
})
