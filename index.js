const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// Creates the array of questions for the user to input.
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
     },
     {
         name: 'description',
         type: 'input',
         message: 'Please include a description for your project.',
      },
      {
         name: 'installation',
         type: 'input',
         message: 'What are the steps required to install your project? Provide a description of how to get the development environment running.',
      },
      {
         name: 'usage',
         type: 'input',
         message: 'What instructions need to be provided to assist the users with the project usage?',
      },
     {
        name: 'guidelines',
        type: 'input',
        message: 'What are the guidelines for contribution?',
     },
     {
        name: 'test',
        type: 'input',
        message: 'Provide test instructions.',
     },
     {
        name: 'github',
        type: 'input',
        message: 'What is your username for GitHub?',
     },
     {
        name: 'githublink',
        type: 'input',
        message: 'Please enter link to your github repository.',
     },
     {
        name: 'linkWebsite',
        type: 'input',
        message: 'What is the link to the website?',
     },
     {
        name: 'screenshot',
        type: 'input',
        message: 'Please provide the pathway from your current directory to a screenshot of the application.',
     },
     {
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
     },
     {
        name: 'license',
        type: 'list',
        message: 'Please select the license you would like to use for your project.',
        choices: ['Apache', 'GNU', 'MIT', 'None'],
    }
];

// Function that prompts the questions
function inquirerPrompts() {
   inquirer.prompt(questions)
   .then((answers) => {
       console.log(answers)
       writeToFile(answers);
       })
}

// Function that writes the README.md file
function writeToFile(data) {
   fs.writeFile('MockupREADME.md', generateMarkdown(data), (err) =>
   err ? console.log(err) : console.log('Success!')); // makes sure this is successfull or not
}

// Function that initializes app
function init() {
   inquirerPrompts();
}

// Function that calls to initialized app
init();