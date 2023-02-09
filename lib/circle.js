const Shape = require("./shape")
// Circle gives back valid XML of a Circle SVG
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render(shapeColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx = "150" cy= "100" r="80" ${this.setColor(shapeColor)} />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}
module.exports = Circle
