// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'Please give a description of your project.',
    name: 'description'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)}

// Function call to initialize app
init();