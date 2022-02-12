// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 
console.log(`My random number: ${randomNumber(10, 50)}`)