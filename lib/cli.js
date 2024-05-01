const shapes = require('.lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');
const shapechoices = ['Circle', 'Triangle', 'Square'];
const colors = require('colors');
const { default: Choices } = require('inquirer/lib/objects/choices');
// Provides the prompts to fill in the answers the user provides
class CLI {
    run () { return inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What characters would you like to use for your text?',
            validate: function (input) {
                if (input.length <= 3) {
                    return true;
                } else {
                    return 'Please enter up to three characters';
                }
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like to use for your text?',
        },
        {
            type: 'list',
            name: 'fillColor',
            message: 'What shape would you like to use?',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'list',
            name: 'fillColor',
            message: 'What color would you like to use to fill your shape?',
        }

    ]
        .then((response) =>{
            console.log(response)
            }).catch (err) =>{(console.log(response))}



        // creates a function to write SVG file
         writeToFile(filename, data) {
            fs.writeToFile('logo.svg', data, (err)=>{
                if (err) throw err;
            })

        // Creates a function to write a svg file
        function writeToFile(filename, data) {


        }


    }

}


validate: Function (input){

}
