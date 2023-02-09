const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

// const data = "Hello World"
function createSVG(text, textColor, shape, shapeColor) {
    let icon;
    switch (shape) {
        case 'circle':
            icon = new Circle(text, textColor, shapeColor).render();
            break;
        case 'triangle':
            icon = new Triangle(text, textColor, shapeColor).renderSVG();
            break;
        case 'square':
            icon = new Square(text, textColor, shapeColor).render();
            break;
        default:
            console.log('something went HORRIBLY WRONG');
    }
    return icon;
}



module.exports = createSVG;