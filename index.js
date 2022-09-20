const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    
];






// Function to promt questions
function inquirerPrompts() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile(answers);
        })
}
// Function to write README file
function writeToFile(data) {
    fs.writeFile('MockupREADME.md', generateMarkdown(data),
    err ? console.log(err) : console.log('Success'));
}
// Function to initialize app
function init() {
    inquirerPrompts
}
// Function call to initialize app
init();