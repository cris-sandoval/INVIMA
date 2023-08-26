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
    drawProductModal();

})

// mostrar el modal del carrito 

const cartBtn = document.querySelector('.header__cart')
const cartModal = document.querySelector('.cart-modal')
let productContainer = document.querySelector('.cart-modal__checkout-container')
let priceModal = document.querySelector('.cart-modal__price')

cartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');
    if (lastNumber == 0) {
        productContainer.innerHTML = '<p class="empty" > Your cart is empty </p>';
    } else {
        drawProductModal()
    }
})

// borrar el carrito o limpiarlo 
function deleteProduct() {
    const deleteCartBtn = document.querySelector('.cart-modal__delete')

    deleteCartBtn.addEventListener('click', () => {
        productContainer.innerHTML = '<p class="empty" > Your cart is empty </p>'
        lastNumber = 0
        cartNotification.innerText = lastNumber
    })

}

// cambiar imagenes cuando se presione btn flechas
const imageContainer = document.querySelector('.gallery__image-container')
const previusBtn = document.querySelector('.gallery__previus')
const nextBtn = document.querySelector('.gallery__next')

let indexImg = 1

nextBtn.addEventListener('click', () => {
    changeNextImgBtn(imageContainer)
})
previusBtn.addEventListener('click', () => {
    changePreviusImgBtn(imageContainer)
})

// mostrar modal de imagenes cuando hago click en el modal, principal
const modalImgGallery = document.querySelector('.modal-gallery__background')
const closeModalGallery = document.querySelector('.modal-gallery__close')


imageContainer.addEventListener('click', () => {
    if (window.innerWidth > 1115) { // Cambia 1115 al ancho deseado para mostrar el modal
        modalImgGallery.style.display = 'grid';
    }
})

closeModalGallery.addEventListener('click', () => {
    modalImgGallery.style.display = 'none';
})

// cambiar las imagenes principales en los thumnails
let galleryThumbnails = document.querySelectorAll('.gallery__thumnail')

galleryThumbnails = [...galleryThumbnails]

galleryThumbnails.forEach(e => {
    e.addEventListener('click', (i) => {

        imageContainer.style.backgroundImage = `url('../images/image-product-${i.target.id}.jpg')`
    })
})



// cambiar las imagenes principales en los thumnails -modal
let modalGalleryThumbnails = document.querySelectorAll('.modal-gallery__thumnail')
const modalImgContainer = document.querySelector('.modal-gallery__image-container')
modalGalleryThumbnails = [...modalGalleryThumbnails]

modalGalleryThumbnails.forEach((e) => {
    
    e.addEventListener('click', () => {
        console.log(e.id.slice(1));
        modalImgContainer.style.backgroundImage = `url('../images/image-product-${e.id.slice(1)}.jpg')`

    })
})

// cambiar imagenes con las flechas!

let nextModal = document.querySelector('.modal-gallery__next')
let previusModal = document.querySelector('.modal-gallery__previus')

nextModal.addEventListener('click', ()=>{
    changeNextImgBtn(modalImgContainer)
})

previusModal.addEventListener('click', ()=>{
    changePreviusImgBtn(modalImgContainer)
})

// modal navbar --

const modalNavBar = document.querySelector('.modal-navbar__background')
let closeNavBar = document.querySelector('.modal-navbar__close-icon')
let iconMenu = document.querySelector('.header__menu')

iconMenu.addEventListener('click', ()=>{
    modalNavBar.style.display = 'block';
})

closeNavBar.addEventListener('click', ()=>{
    modalNavBar.style.display = 'none';
})


// funciones 

function drawProductModal() {
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
          <img class="cart-modal__img" src="./images/image-product-1-thumbnail.jpg" alt="products1">
          <div>
            <p class="cart-modal__products">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125 x ${lastNumber} <span>${lastNumber * 125}.00</span></p>
          </div>
          <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>
        `
    deleteProduct()
}

function changeNextImgBtn(containerImg) {
    if (indexImg === 4) {
        indexImg = 1
    } else {
        indexImg++
    }
    containerImg.style.backgroundImage = `url('../images/image-product-${indexImg}.jpg')`

}


function changePreviusImgBtn(containerImg) {
    if (indexImg === 1) {
        indexImg = 4
    } else {
        indexImg--
    }
    containerImg.style.backgroundImage = `url('../images/image-product-${indexImg}.jpg')`

}
