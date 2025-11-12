
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    alert(count)
}

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Josh"
let greeting = "Welcome to Passenger Counter "
// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = greeting + name