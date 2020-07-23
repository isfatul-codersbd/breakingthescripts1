console.log("Hello World");

let number = 0;
let value = document.getElementById("val");
value.innerText = number;

function increment() {
  number = number + 1;
  value.innerText = number;
}

function decrement() {
  number = number - 1;
  value.innerText = number;
}

let buttonOne = document.getElementById("inc");

buttonOne.addEventListener("mouseover", increment);

let buttonTwo = document.getElementById("dec");

buttonTwo.addEventListener("mouseover", decrement);
