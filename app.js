const number = Math.ceil(Math.random() * 10);
console.log(number);

let guesses = 3;
let gameOver = false;

const submit = document.querySelector("#guess-value");
const value = document.querySelector("#input");
const message = document.querySelector("#message");

loadEventListeners();

function loadEventListeners() {
  submit.addEventListener("click", check);
}

function check(e) {
  e.preventDefault();
  if (gameOver) location.reload();

  console.log(value.value);
  if (!value.value) {
    message.textContent = "Number toh type kar re haule";
    message.style.color = "red";
  } else if (value.value == number) {
    message.textContent = "Mubarak pathe jeet gaye tum";
    submit.textContent = "Aur Ek Baar khelte";
    submit.style.disabled = true;
    message.style.color = "green";
    value.style.border = "1px solid green";
    gameOver = true;
  } else {
    guesses -= 1;
    guesses == 1
      ? (message.textContent =
          "Aakhri mauqa hai pasha zara dimaag lagake khelo")
      : (message.textContent = "Galat jawab");
    message.style.color = "red";
    value.style.border = "1px solid red";
  }

  if (!guesses) {
    message.textContent = "iflaas qismat dikhri.. haar gaye tum";
    message.style.color = "red";
    submit.textContent = "Aur Ek Baar khelte?";
    value.style.border = "1px solid red";
    gameOver = true;
  }
}
