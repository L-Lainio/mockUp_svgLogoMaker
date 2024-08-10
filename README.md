# SVG-Logo-Maker
Week-10 Challenge Object-oriented Programming Challenge: SVG Logo Maker

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Lora Lainio](https://img.shields.io/badge/Lora-Lainio-4baaaa.svg)

## Table of Contents

* [Description](#description)
  
* [Screenshots](#screenshots)

* [Technologies-Used](#technologies-used)

* [Installation](#installation)

* [Test-Instructions](#test-instructions)

* [License](#license)

* [Contact](#contact)

## Description
In this challenge, you are tasked with building a Node.js command-line application that generates a logo based on user input. The application prompts the user to select a color and shape, provide text for the logo, and then saves the generated logo as an SVG file. You will need to provide a walkthrough video demonstrating the functionality of the application and passing all tests.

This application was built as a way to allow freelance web developers to create simple logos for their clients and projects so that they can forego paying a graphic designer. It utilizes inquirer to prompt the user within the command line for how they would like their logo to look (ie. what text they would like their logo to display (up to 3 characters in length), the color of that text, the shape of their logo (triangle, square, or circle) and the color of that shape.) Once the user answers all prompts, then an SVG file is written using their selections to generate a logo.

## Screenshots
![](/images/Zight%20Recording%202024-5-20%20at%2011.44.34%20PM.gif)
![](/images/Zight%202024-5-20%20at%2011.48.55%20PM.png)
![](/images/logo.svg)
![](/images/circleSVG.svg)
![](/images/logo%20(1).svg)


## Technologies Used
Node.js
Jest for unit testing
Inquirer for collecting user input

This project is powered by Node.js v16, utilizes inquirer v8.2.4 (node package manager), and file system module (node package manager). It also employs jest v29.5.0 (node package manager) for the unit testing conducted in this application.

## Installation

Installation:
Clone the repository or create a new directory for your project.
Set up the directory structure as recommended:


├── examples/           
├── lib/                
    ├── shapes.js       
    ├── shapes.test.js  
    └── more...         
├── .gitignore          
├── index.js            
├── package.json
└── README.md    

Install Jest and Inquirer by running:
npm install jest inquirer
Create the necessary classes (Triangle, Circle, Square) in the lib folder and write tests for each class using Jest.
Implement the application logic in index.js to prompt the user for input, generate the logo, and save it as an SVG file.


## Test-Instructions

Use Jest for running unit tests.
Each shape class (Triangle, Circle, Square) should be tested for a render() method that returns the corresponding SVG string with the given shape color.
An example test for the Triangle class could be:
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
You may also need to write additional tests for handling user input, file writing, etc., although this is optional.

## License

NOTICE: This application is covered under the MIT License

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contact

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/L-Lainio)

<a href="mailto:lora.lainio.it@gmail.com">lora.lainio.it@gmail.com</a>

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/L-Lainio)

<a href="mailto:arollainio@gmail.com">arollainio@gmail.com</a>
