
//SECTION
// Java goes Top to  Bottom
// var x = 10 // var is old and outdated - dont use
// say x in console
// will retrieve 10

//updated var is let, we can create variables with scope

// let z = 12
//console will spit out 12 when z is input
// now we can do things in the console like 
// x + z  // console will give us 22
// z + 100 // wil give 112

//whenever you have a variable and you put = after it, you are changing the value of the variable, different than saying
// let z = z + 1 // console will give us "'z' has already been declared"
//whenever you use LET, you are CREATING a VARABLE to be used, cannot be used again 

// let string = "Emily"
// let lastName = "Rhodes"
// let anotherString = "Another String"

//Data types 
// "strings"
// booleans

// let trueBooleans = true
// let falseBoolean = false 

// good for confirming things, if() statements, behind the scenes tracking modes you are on. booleans can be created with standard expresseions

// let result = string == "Emily"
// now I can check my result variable in the console
// result
// console spits out "true"



//now I can check my "results" varialbe in the console
// results
// console spits out "false"
// result is a boolean created from a condition or in this case an expression
//SECTION

console.log("❤️")
// function is creating a SCOPE for INSTRUCTIONS to be ran
// function greeting() {
//     console.log("howdy 🤠")
// }
// enter your function into the console to run it 
// greeting()
//need the () to invoke

// (parameters go here) - created a temp variable to give me when you go to invoke the fucntion

// function double(num){
//     console.log('✅', num)
// }

//double
// ƒ double(num){
//     console.log('✅', num)
// }
// double()
// app.js:57 ✅ undefined
// undefined

// double(10)
// app.js:58 ✅ 10

// function double(num){
//     let doubled = num * 2
//     console.log('✅', doubled)
//}

//double(2)
// app.js:74 ✅ 4

// function double(num){ // num is the parameter
//     let doubled = num * 2
//     console.log('✅', doubled)
// }

// double(35) // here 35 is an argument of our function even as a variable

function greeting() {
    console.log("howdy 🤠")
}

function double(num) {
    let doubled = num * 2
    console.log('🧠', doubled)
}

//if someone were to enter this into the site, they would see a secret image// i need to be able to allow the user to input this
let secretCode = "🦧🦖🦧🤠"
//we setting this to empty
let userInput = ""

function inputOrangutan() {
    console.log('🦧')
    //here I am setting userInput = the current userInput, but add oranguatan - when user clicks the orangatan button, it will add the emoji to the userInput variable
    userInput = userInput + '🦧'
    drawUserInput()
}

function inputDinosaur() {
    console.log('🦖')
    //below is short hand for userInput = userInput + 'emoji'
    userInput += '🦖'
    drawUserInput()
}

function inputCowboy() {
    console.log('🤠')
    userInput += '🤠'
    drawUserInput()
}
//I need to somehow save the order of how peeps are clicking these - we create userInput = "" and then utilize this through our code to then display after an onClick event listener is utialized

//I want this button to read the userInput and see if it equals the secretCode - boolean
function submitCode() {
    console.log('submitting', userInput, secretCode)
    //the if statement allows us to create another scope if the true boolean is ran
    // if(true){run this scope} :: if(false){do this} :: we dont want true or false in there, we want our conditions to be present there
    if (userInput == secretCode) {
        window.alert('Correct!')
        console.log('correct code')
    } else {
        console.log('incorrect code')
        window.alert('Incorrect Code')
        clearInput()
    }
}

//🖌️🎨 DRAW ---------------------------------

function drawUserInput() {
    let userCodeElm = document.getElementById('userCode')
    console.log(userCodeElm, userCodeElm.innerText)
    userCodeElm.innerText = userInput
}

function clearInput() {
    userInput = ""
    drawUserInput()
}