const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

const prompts = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a logo title with up to three characters.'
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Enter a color (or hexadecimal number) for the logo text.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo.',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter a color (or hexadecimal number) for the logo text.'
    }
];

function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Generated logo.svg'));
}

function init () {
    fs.prompt(prompts)
        .then((data) => {
            const logo = generateLogo(data);
            writeToFile('logo.svg', logo)
        })
        .catch((err) => console.error(err));
}

init();