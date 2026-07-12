//popup section page 
// const popup = document.querySelectorAll(".popup");
// const openPopup = document.querySelectorAll(".openPopupBtn");
// const closePopup = document.querySelectorAll(".closePopupBtn");



// popup.forEach(popups => {
//     popups.style.display = 'none';
// });

// console.log('hello world')
// openPopup.addEventListener('click', () => {
//     popup.style.display = "";
// })

// closePopup.addEventListener('click', () => {
//     popup.style.display = "none";
// })

// popup.addEventListener('click', (e) => {
//     if(e.target === popup){
//         popup.style.display = "none";
//     }
// });

// //setCounter of product btn
// const btnPlus = document.getElementById("btn-plus")
// const btnMinus = document.getElementById("btn-minus")
// const product = document.getElementById("product");
// let temp = 1;
// btnPlus.addEventListener('click', () => {


//     if(temp >= 99){
//         temp = 1;
//     }else{
//         temp++;
//     }
//     product.value = temp;
// })


// btnMinus.addEventListener('click', () => {
//     if(temp <= 1){
//         temp = 99;
//     }else{
//         temp--;
//     }
//     product.value = temp;

// })


// =====================================================================================

// Select all cards
const cards = document.querySelectorAll('.group');

cards.forEach((card) => {
    const openBtn = card.querySelector('.openPopupBtn');
    const closeBtn = card.querySelector('.closePopupBtn');
    const popup = card.querySelector('.popup');
    const btnPlus = card.querySelector('.btn-plus');
    const btnMinus = card.querySelector('.btn-minus');
    const productInput = card.querySelector('.product');
    
    // Wish
    const wishPopup = card.querySelector('.wishPopup')

    // Guard clause - skip if any element missing
    if (!openBtn || !closeBtn || !popup || !btnPlus || !btnMinus || !productInput) return;

    let count = 1;

    popup.style.display = 'none'

    // Show popup
    openBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    // Close popup via X button
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup by clicking outside the box
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Counter plus
    btnPlus.addEventListener('click', () => {
        if (count >= 99) {
            count = 1;
        } else {
            count++;
        }
        productInput.value = count;
    });

    // Counter minus
    btnMinus.addEventListener('click', () => {
        if (count <= 1) {
            count = 99;
        } else {
            count--;
        }
        productInput.value = count;
    });
});
const ProductQtys = document.querySelectorAll('.product-qty');

ProductQtys.forEach(qty => {

const btnPlusAll = qty.querySelector('.btn-plus-all');
const btnMinusAll = qty.querySelector('.btn-minus-all');
const productAll = qty.querySelector('.product-all');

if (!btnPlusAll || !btnMinusAll || !productAll) return;

let setCount = parseInt(productAll.value) || 1;
btnPlusAll.addEventListener('click', () =>{
    if(setCount >= 99|| productAll.value >= 99){
        alert("Sorry! We have only 99 stock left...");
    }else{
        setCount++;
    }
    productAll.value = setCount;
})

btnMinusAll.addEventListener('click', () =>{
    if(setCount <= 1){
        alert("Please choose at least one item or delete...")
    }else{
        setCount--;
    }
    productAll.value = setCount;
})
})