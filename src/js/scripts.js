// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const myName = "Leena";
const myAge = 22;

console.log(myAge)

// Practical JavaScript
// Show and hide an element on the page

// 1. Find the element to hide
const toggledParagraph = document.querySelector(".show");
console.log(toggledParagraph);

// Write a function that toggles the show/hide classes
function toggleParagraph() {
	toggledParagraph.classList.toggle("hide");
	toggledParagraph.classList.toggle("show");
	console.log("My toggle function");
	console.log(toggledParagraph);
}

// Call the function to hide
//toggleParagraph();

// Call it again to show
//toggleParagraph();

//Find the button and toggle the paragraph when we click it
const toggleButton = document.querySelector("#toggle-control");

// Event listener
toggleButton.addEventListener("click", toggleParagraph);

// Note to myself: if I'm going to ask ChatGPT on JavaScript knowledge, ask "Can you tell me how to toggle a class on and off using vanilla JavaScript?"
//Next 4 lines are just the behind process to get to where we want to be
//toggledParagraph.classList.toggle("show");
//console.log(toggledParagraph);

//toggledParagraph.classList.toggle("hide");
//console.log(toggledParagraph);
