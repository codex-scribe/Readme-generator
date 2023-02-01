// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
let licenseLink;
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please write the installation steps to execute your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide directions on how to use the program.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide information on how to contribute to the project.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please provide information on how to test your application.",
    name: "tests",
  },
  {
    type: "list",
    message: "Please choose a license under which your code repository is available.",
    choices: ['MIT', 'GNU 3.0', 'Apache License 2.0', 'other', 'none'],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username for purposes of users to contact you with questions?",
    name: "GitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    switch(data.license) {
      case 'MIT':
        licenseLink = './assets/mit.svg';
        break;
      case 'GNU 3.0':
        licenseLink = './assets/gnu.svg';
        break;
      case 'Apache License 2.0':
        licenseLink = './assets/apache.svg';
        break;
      case 'other':
        licenseLink = '';
        break;
      case 'none':
        licenseLink = '';
        break;
      default:
        licenseLink = '';
        break;
    }
    fs.writeFile(
      "README.md",
      `
# ${data.title}
## Description
${data.description}
`,
      (err) => (err ? console.error(err) : console.log("success!"))
    );
  });
}

// Function call to initialize app
init();
