// console.log('js file is linked!')

// javascript has 'first-class functions'
// const myFunc = function() {}

// a callback function is a function that is passed to another function as a parameter

// a higher order function accepts another function as a paramenter
function higherOrder(cb) {
    // invoke the callback that is passed in
    cb()
}

function callback() {
    console.log('the callback has been invoked!')
}

higherOrder(callback) // passing a callback function to a higher order function

// function namedFunction() {}

// getElementById('myDiv').addEventLister('click', namedFunction)

higherOrder(() => {
    console.log('the arrow function has been invoked!')
})

function cbCalculator(numOne, numTwo, banana) {
    return banana(numOne, numTwo)
}

function add(taco, burrito) {
    return taco + burrito
}

function subtract(one, two) {
    return one - two
}

let result = cbCalculator(10, 5, add)
console.log(result)
result = cbCalculator(20, 7, subtract)
console.log(result)

// anonymous callback function
result = cbCalculator(10, 5, function(num1, num2) {
    return num1 * num2
})

console.log(result)

result = cbCalculator(100, 3, (numberOne, numberTwo) => {
    return numberOne / numberTwo
})
// addEventListener('click', e => {
//     // ...do some stuff
// })
console.log(result)

/*
JS TIMING FUNCTIONS
*/

// setInterval
function tick() {
    console.log('tick')
}
// setInterval(callback, time in ms)
const tickInterval = setInterval(tick, 1000)
const tockInterval = setInterval(function() { console.log('tock') }, 2000)
console.log('⏰', typeof tickInterval)

// DOMContentLoaded events only fire when html page is finished loading
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tickStopButton').addEventListener('click', () => {
        clearInterval(tickInterval)
        clearInterval(tockInterval)
    })
})

const anon = function() { }
const arrow = () => { }

// setTimeout
const once = () => {
    console.log('setTimeout runs only once!')
}

// runs only once
setTimeout(once, 500)

const neverWillHappen = setTimeout(once, 5000)
// setTimeout uses clearTimeout
clearTimeout(neverWillHappen)