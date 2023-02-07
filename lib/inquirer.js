const inquirer = require ('inquirer');
const {writeFile} = require('fs/promises');

const questions = [{
    type: 'input',
    name : 'logo',
    message : 'Enter up to 3 letters that will display as text on generated icon',
    default : 'YES',
},
{
    type: 'input',
    name : 'textCol',
    message : 'You just provided some text. Now, it is time to give it some flare. what color should the text be?',
    default : 'white',
},
{
    type: 'list',
    name : 'shape',
    message : 'please select from our premium selection of SVG shapes!',
    choices: [
        'circle',
        'square',
        'triangle',
    ]
},
{
    type: 'input',   
    name : 'shapeCol',
    message : 'Secondly, What color should the icon itself be?',
    default : 'blue',
},
]