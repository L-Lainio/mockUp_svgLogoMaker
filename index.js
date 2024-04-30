const { default: inquirer } = require("inquirer");
 const CLI = require(".lib/cli");
// // TODO: Include packages needed for this application
 new CLI().run();

 class CLI {
 run() {
    return inquirer
    .prompt()
    .then()
    .catch()
 }
 }
 module.exports = CLI;
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
