// Madlibs is a simple game where you create a story template with "blanks" for words. 
// You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Example:
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// ALGORITHM:

// Prompt for a noun, a verb, an adjective, an adverb
// Store each answer in a variable
// Initialize a function that PRINTs the story template as a string literal, with variables appropriately stored


let rls = require("readline-sync");
const PRINT = text => console.log(text);


function madlib() {
    PRINT(`Enter a noun: `)
    let noun = rls.prompt();
    
    PRINT(`Enter a verb: `)
    let verb = rls.prompt();
    
    PRINT(`Enter an adjective: `)
    let adj = rls.prompt();
    
    PRINT(`Enter an adverb: `)
    let adv = rls.prompt();
    
    PRINT(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`)
    PRINT(`The ${adj} ${noun} ${verb}s ${adv} over the lazy dog.`)
    PRINT(`The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`)
}

madlib();