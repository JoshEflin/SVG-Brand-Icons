const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

const data = "Hello World"
function createSVG(data){
    const fs = require('fs/promises');
    fs.writeFile("../examples/logo.svg",data)
      .then(response => console.log('Generated logo.svg'));
}
createSVG(data)