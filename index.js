// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project title.",
    name: "title",
  },

  {
    type: "input",
    message: "Describe your project.",
    name: "description",
  },

  {
    type: "input",
    message: "How do you install your application?",
    name: "installation",
  },

  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },

  {
    type: "input",
    message: "Who contributed?",
    name: "contribution",
  },

  {
    type: "input",
    message: "Enter test instructions.",
    name: "tests",
  },

  { type: "list", message: "Select a license for your application.", name: "license", choices: ["None", "MIT", "APM", "AUR license", "Bower"] },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const mkdn = generateMarkdown(data);
  return fs.writeFileSync(fileName, mkdn);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
