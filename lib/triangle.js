const Shape = require("./shape")
// separated render from renderSVG so that the example test in the readme would pass. I designed my tests differently 
// so this one needed to be refactored so I could prove that I know what is going on
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render(shapeColor){
        return `<polygon points="150, 18 244, 182 56, 182" ${this.setColor(shapeColor)} />`
    }
    renderSVG(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.render()}
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}
module.exports = Triangle


const shape = new Triangle('BOO', 'white', 'blue');
shape.setColor("red");
console.log((shape.renderSVG()));
