// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let numb = 13
let anything = numb.toString()
console.log(numb, anything)

// Write a JavaScript program to convert a string to the number.
let string = "14"
let num = parseInt(string)
console.log("string to num",string, num)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
document.getElementById("Type-of").innerHTML = 
console.log(typeof 123);



// Write a JavaScript program that adds 2 numbers together.
let a = 1;
let b = 2;
let x = a + b;
console.log(x)


// Write a JavaScript program that runs only when 2 things are true.
let firstthing = 10>9
let secondthing = 11>10
if (firstthing & secondthing) {
  console.log("true")
}  
else {
console.log("false")
}

// Write a JavaScript program that runs when 1 of 2 things are true.
let newvar1 = 100<1
let newvar2 = 99>2
if (newvar1 || newvar2) {
  console.log("Howdy Partner")
}
else {
  console.log("Farewell Bucko")
}
//return "True"

// Write a JavaScript program that runs when both things are not true.  
let liar1 = 10>11
let liar2 = 50>60
if (liar1 == false & liar2 == false) {
  console.log("Close enough")
} 

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
