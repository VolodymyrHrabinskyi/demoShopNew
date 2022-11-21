
const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".btn-card");
console.log(addToCartBtns);

const  cart = ["iphone", "iwatch"];

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        productsCountEl.textContent = quantityInput[i].value;
        quantityInput[i].value = 1; 
    });
}




const likeBtns = document.querySelectorAll(".like");
likeBtns.forEach(item =>{
    item.addEventListener("click", function(){
        if (item.classList.contains("liked")){
            item.classList.remove("liked");
        } else {
            item.classList.add("liked");
        }
    });
});
 

const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".btn-details");
const btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);



 /*
 
 
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");

let minCount = 1;
let maxCount = 5;
let currentValue = +quantityInput.value;

for (let i = 0; i < quantityInput.length; i++) {
  let currentValue = +quantityInput[i].value;
  toggleButtonState(currentValue, incrementBtns[i], decrementBtns[i]);
}

function toggleButtonState(count, incrementBtn, decrementBtn) {
  decrementBtn.disabled = count <= minCount;
  incrementBtn.disabled = count >= maxCount;
}
for (let i = 0; i < incrementBtns.length; i++) {
  incrementBtns[i].addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue + 1;
    quantityInput[i].value = nextValue;

    toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
  });
}
for (let i = 0; i < decrementBtns.length; i++) {
  decrementBtns[i].addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue - 1;
    quantityInput[i].value = nextValue;

    toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
  });
}

*/

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
/*
let minCount = 1;
let maxCount = 5;
*/
function Counter(
  incrementBtn,
  decrementBtn,
  inputField,
  minCount = 1,
  Maxcount = 5
  ) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

 
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  };
  this.toggleButtonState()

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };
  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

let counter1 = new Counter(
  incrementBtns[0],
    decrementBtns[0],
    quantityInput[0]
);

console.log(counter1);