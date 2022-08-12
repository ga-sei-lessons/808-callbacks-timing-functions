// // console.log('js file is linked!')

// // javascript has 'first-class functions'
// // const myFunc = function() {}

// // a callback function is a function that is passed to another function as a parameter

// // a higher order function accepts another function as a paramenter
// function higherOrder(cb) {
//     // invoke the callback that is passed in
//     cb()
// }

// function callback() {
//     console.log('the callback has been invoked!')
// }

// higherOrder(callback) // passing a callback function to a higher order function

// // function namedFunction() {}

// // getElementById('myDiv').addEventLister('click', namedFunction)

// higherOrder(() => {
//     console.log('the arrow function has been invoked!')
// })

// function cbCalculator(numOne, numTwo, banana) {
//     return banana(numOne, numTwo)
// }

// function add(taco, burrito) {
//     return taco + burrito
// }

// function subtract(one, two) {
//     return one - two
// }

// let result = cbCalculator(10, 5, add)
// console.log(result)
// result = cbCalculator(20, 7, subtract)
// console.log(result)

// // anonymous callback function
// result = cbCalculator(10, 5, function(num1, num2) {
//     return num1 * num2
// })

// console.log(result)

// result = cbCalculator(100, 3, (numberOne, numberTwo) => {
//     return numberOne / numberTwo
// })
// // addEventListener('click', e => {
// //     // ...do some stuff
// // })
// console.log(result)

// /*
// JS TIMING FUNCTIONS
// */

// // setInterval
// function tick() {
//     console.log('tick')
// }
// // setInterval(callback, time in ms)
// const tickInterval = setInterval(tick, 1000)
// const tockInterval = setInterval(function() { console.log('tock') }, 2000)
// console.log('⏰', typeof tickInterval)

// // DOMContentLoaded events only fire when html page is finished loading
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('tickStopButton').addEventListener('click', () => {
//         clearInterval(tickInterval)
//         clearInterval(tockInterval)
//     })
// })

// const anon = function() { }
// const arrow = () => { }

// // setTimeout
// const once = () => {
//     console.log('setTimeout runs only once!')
// }

// // runs only once
// setTimeout(once, 500)

// const neverWillHappen = setTimeout(once, 5000)
// // setTimeout uses clearTimeout
// clearTimeout(neverWillHappen)

// 1.
// Write a simple greeting function that just prints "Hello!" and save it to a variable. Schedule it to run one time, 5 seconds from now.
const greeting = () => {
    console.log('Hello!')
}

const greetingTimeout = setTimeout(greeting, 5000)

// 2.
// Schedule that same greeting function to run once every one-and-a-half seconds

const greetingInterval = setInterval(greeting, 1500)

// 3.
// Cancel the one-time execution from question 1. (If done correctly, you will never see it print.) Note that to do this, you have to assign the return value of setTimeout to a variable.

clearTimeout(greetingTimeout)

// 4. Cancel the recurring print from question 2. (If done correctly, you will never see it print.) Note that to do this, you have to assign the return value of setInterval to a variable.

clearInterval(greetingInterval)

/* 
5. Use setInterval to write a program that prints the following:

(This should mimic a countdown, so each line will print after a one second delay.)

10
9
8
7
6
5
4
3
2
1
Blast off!

BONUS: How could you mimic the setInterval functionality using setTimeout?
*/

// keep track of the current count
// let count = 10

// const countDownInterval = setInterval(countDown, 1000)

// function countDown() {
//     // if the count is greaterthan 0, print the current count and decrement it
//     if (count > 0) {
//         console.log(count)
//         count = count - 1
//     } else {
//         // otherwise, print blast off and clear the interval
//         console.log('Blast off!! 🚀')
//         clearInterval(countDownInterval)
//     }
// }
let count = 10

setTimeout(countDown, 1000)

function countDown() {
    // if the count is greaterthan 0, print the current count and decrement it
    if (count > 0) {
        console.log(count)
        count = count - 1
        setTimeout(countDown, 1000)
    } else {
        // otherwise, print blast off and clear the interval
        console.log('Blast off!! 🚀')
    }
}