#!/usr/bin/env node
import inquirer from "inquirer"

const word: {sentence: string } = await inquirer.prompt({
    name: "sentence",
    type:"input",
    message: "Enter a sentence"
})

const line = word.sentence.trim().split(" ");
console.log(word);
console.log("There are", line.length , "words in your sentence");

























