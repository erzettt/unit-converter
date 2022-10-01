/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const buttonEl = document.getElementById("button-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let inputEl = document.getElementById("input-el")

buttonEl.addEventListener('click', function() {
    renderAll()
})

function renderAll() {
    lengthEl.textContent = length(inputEl.value)
    volumeEl.textContent = volume(inputEl.value)
    massEl.textContent = mass(inputEl.value)
}

function length(input) {
    let lengthElement = `
    ${input} meters = ${(3.281 * input).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters`
    return lengthElement
}

function volume(input) {
    let volumeElement = `
    ${input} liters = ${(0.264 * input).toFixed(3)} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)} liters`
    return volumeElement
}

function mass(input) {
    let massElement = `
    ${input} kilos = ${(2.204 * input).toFixed(3)} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)} kilos`
    return massElement
}