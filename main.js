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

// agregar total de productos al carrito, cuando presiono el btn add

const addBtn = document.querySelector('.details__button')
let cartNotification = document.querySelector('.header__cart--notification')
let lastNumber = parseInt(cartNotification.innerText)

addBtn.addEventListener('click', () => {
    lastNumber = lastNumber + userInputNumber

    cartNotification.innerText = lastNumber;
    cartNotification.style.display = 'block';
    priceModal.innerHTML = `$125 x ${lastNumber} <span>${lastNumber*125}.00</span>`
})

// mostrar el modal del carrito 

const cartBtn = document.querySelector('.header__cart')
const cartModal = document.querySelector('.cart-modal')
let priceModal = document.querySelector('.cart-modal__price')
 
cartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show')
})

// borrar el carrito o limpiarlo 
const deleteCartBtn = document.querySelector('.cart-modal__delete')
const productContainer = document.querySelector('.cart-modal__checkout-container')

deleteCartBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="empty" > Your cart is empty </p>'
    lastNumber = 0
    cartNotification.innerText = lastNumber
})






