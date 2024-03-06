
// let choiceOfDrink = "fanta"
// let okpaIsAvailable = true

// if (choiceOfDrink === "fanta" || okpaIsAvailable) {
//     console.log('Buy okpa for me with', choiceOfDrink)
// }
// else if (choiceOfDrink === 'coke' || okpaIsAvailable == false) {
//     console.log('Buy love bite and Pepsi')
// }
// else {
//     console.log('we are in danger !!!')
// }

// let nameOfSudent = ["mamah","ogu","jude"]
// let numberOfClick = i
const inputValue = document.getElementById("value");
const submit = document.getElementById("submit");
const result = document.querySelector("#result")
const refresh = document.getElementById("play-again")
let randonNumber = Math.floor(Math.random() * 100 + 1);
const numberOfClick = document.querySelector(".number-Of-click");
let guess = randonNumber;
let click = 5;

function getValue() {
    if (inputValue.value == "") {
        result.innerHTML = "Pless enter a number";
    }
    else if (inputValue.value > guess) {
        result.innerHTML = 'Your guess is high'
        result.style.color = 'red'
    }
    else if (inputValue.value < guess) {
        result.innerHTML = "Your guess is low"
        result.style.color = 'blue'
    }
    else if (inputValue.value == guess) {
        result.innerHTML = `You win !!!  Your guess was ${guess}`
        result.style.color = 'green'
    }
}
function clickCounts() {
    click--;
    numberOfClick.textContent = click;
    if (click === 0) {
        refresh.innerHTML = `Refresh the page to play again the guess is ${guess}`
        submit.style.display = 'none'
    }
}
submit.addEventListener("click", () => {
    clickCounts()
    getValue()
    inputValue.value = ""
})
