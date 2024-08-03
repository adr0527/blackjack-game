// Array of avaliable cards

const avaliableCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const drawCard = () => { 
    return avaliableCards[Math.floor(Math.random() * 10)]
}

let cardCount = 2
let firstCard = 0 
let secondCard = 0
let sum = 0

// State 
let hasBlackJack = false
let isAlive = true

// message
let message = ""

// dom elements 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let historyEl = document.querySelector("#history-el")
let newCardBtn = document.querySelector("#newCardBtn")

newCardBtn.disabled = true;


function checkState() { 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else if (sum <= 20 && cardCount === 5) { 
        message = "Five Dragon"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    reset()
}


function startGame() {
    newCardBtn.disabled = false;
    console.log("enabled")
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " 
    // Starting cards
    firstCard = drawCard()
    secondCard = drawCard()
    sum = firstCard + secondCard
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    checkState()
    messageEl.textContent = message
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    let newCard = drawCard()
    sum += newCard
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent += " " + newCard
    cardCount += 1
    checkState()
    messageEl.textContent = message

}

function reset() { 
    if (isAlive == false || hasBlackJack == true ) { 
        sum = 0
        messageEl.textContent = "Want to play a round?"
        cardCount = 2
        isAlive = true
        hasBlackJack = false
        console.log("run")
        newCardBtn.disabled = true
    }
}