let winnningScore = document.querySelector(".winningScore span");
let form = document.querySelector("form");
let input = form[0];
let p1ScoreElm = document.querySelector(".p1Score span");
let p2ScoreElm = document.querySelector(".p2Score span");
let p1btnElm = document.querySelector(".p1");
let p2btnElm = document.querySelector(".p2");
let resetBtn = document.querySelector(".resetBtn");
let winnerElm = document.querySelector(".winner span");

let winnerScore = 00;

//For Validation input
//Nan !== Nan is return true
function isValid(inputValue) {
  if (!inputValue) {
    alert("Please input value!");
    return false;
  } else if (Number(inputValue) !== Number(inputValue)) {
    alert("Please give Number as input!");
    return false;
  }
  return true;
}

//For reset input field
function resetForm() {
  input.value = "";
}

//After win disable button
function disableBtn() {
  p1btnElm.classList.add("pointer-events-none", "opacity-50");
  p2btnElm.classList.add("pointer-events-none", "opacity-50");
}

//Create random number

form.addEventListener("submit", (event) => {
  //Prevent browser reload
  event.preventDefault();

  //get value
  //event.target[0].value
  let inputValue = input.value;

  //check input validation
  let validInput = isValid(inputValue);

  if (!validInput) {
    winnningScore.textContent = winnerScore;
  } else {
    winnerScore = inputValue;
  }
  winnningScore.textContent = winnerScore;
  resetForm();
});

//Handling playe button click
//pl click execute his code then turn re-assign value false so p1 is not activate (now turn is false)
//p2 click execute execute his code (!turn=true) then turn re-assign value true so p2 is not activate (now turn is true so p1 is again activate)
//Disabling system with classList
let p1Score = 00;
let p2Score = 00;
let p1turn = true;
let p2turn = false;
p1btnElm.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 10) - 1;
  if (p1turn) {
    if (p1Score < winnerScore) {
      p1Score = p1Score + randomNumber;
      p1ScoreElm.textContent = p1Score;
    } else {
      p1Score = p1Score - randomNumber;
      p1ScoreElm.textContent = p1Score;
    }
  }
  p1turn = false;
  p1btnElm.classList.add("pointer-events-none", "opacity-50");
  p2turn = true;
  p2btnElm.classList.remove("pointer-events-none", "opacity-50");

  if (p1Score == winnerScore) {
    winnerElm.textContent = "Player-01 is Win!";
    disableBtn();
  }
});

p2btnElm.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 10) - 1;
  if (p2turn) {
    if (p2Score < winnerScore) {
      p2Score = p2Score + randomNumber;
      p2ScoreElm.textContent = p2Score;
    } else {
      p2Score = p2Score - randomNumber;
      p2ScoreElm.textContent = p2Score;
    }
  }
  p2turn = false;
  p2btnElm.classList.add("pointer-events-none", "opacity-50");
  p1turn = true;
  p1btnElm.classList.remove("pointer-events-none", "opacity-50");

  if (p2Score == winnerScore) {
    winnerElm.textContent = "Player-02 is Win!";
    disableBtn();
  }
});

function resetData() {
  winnerScore = 00;
  p1Score = 00;
  p2Score = 00;
  p1turn = true;
  p2turn = false;
  winnningScore.textContent = winnerScore;
  p1ScoreElm.textContent = p1Score;
  p2ScoreElm.textContent = p2Score;
  p1btnElm.classList.remove("pointer-events-none", "opacity-50");
  p2btnElm.classList.remove("pointer-events-none", "opacity-50");
  winnerElm.textContent = "";
  resetForm();
}

resetBtn.addEventListener("click", () => {
  resetData();
});
