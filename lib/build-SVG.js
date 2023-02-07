const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');
const fs = require('fs/promises');
// const data = "Hello World"
function createSVG(data){
    fs.writeFile("../examples/logo.svg",data)
      .then(response => console.log('Generated logo.svg'));
}
createSVG(data)