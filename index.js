
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let name = "Josh"
let greeting = "Welcome to Passenger Counter "
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // alert(count)
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let  prevEntries = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += prevEntries
    // NB: Make sure to not delete the existing content of the paragraph

}



welcomeEl.innerText = greeting + name
welcomeEl.innerText += "👋"
