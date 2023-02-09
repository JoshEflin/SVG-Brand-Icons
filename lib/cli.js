const inquirer = require('inquirer');
const colors = require('./colors')
const build = require('./build-SVG')
const fs = require('fs/promises');
function main(){
const questions = [{
    type: 'input',
    name : 'text',
    message : 'Enter up to 3 letters that will display as text on generated icon',
    default : 'YES',
    validate(text) {
        if (text.length <= 3) {
            return true
        }
        return "Stop being SOOOOO extra, enter up to three characters only."
    }
},
{
    type: 'input',
    name : 'textColor',
    message : 'You just provided some text. Now, it is time to give it some flare. what color should the text be?',
    default : 'white',
    validate : function (response) {
        if (!response.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)&& !colors.includes(response)){
               return false
            } return true    
    }
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
    name : 'shapeColor',
    message : 'Secondly, What color should the icon itself be?',
    default : 'blue',
    validate : function (response) {
        if (!response.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)&& !colors.includes(response)){
               return false
            } return true    
    }
},
]
 
inquirer.prompt(questions).then(({text, textColor, shape, shapeColor}) => {
    
    fs.writeFile("./examples/logo.svg",build(text, textColor,shape,shapeColor))
      .then(response => console.log('Generated logo.svg'));
})
}
module.exports = main