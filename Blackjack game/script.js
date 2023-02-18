let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: "Lazar",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.innerHTML = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  if (sum == 0) {
    console.log(sum);
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard, secondCard);
    renderGame();
  }
}

function renderGame() {
  cardsEl.innerHTML = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + ", ";
  }
  sumEl.innerHTML = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "You've got blackjack!";
    player.chips += 20;
    hasBlackJack = true;
    isAlive = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.innerHTML = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let anotherCard = getRandomCard();
    sum += anotherCard;
    cards.push(anotherCard);
    console.log(cards);
    renderGame();
  }
}

function restartGame() {
  location.reload();
  console.log("aa");
}
