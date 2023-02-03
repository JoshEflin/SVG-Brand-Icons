const Shape = require("./shape")

class Circle extends Shape {
    constructor(text, textColor, shapeColor, shape) {
        super(text, textColor, shapeColor)
        this.shape = shape;
    }
    render(text, textColor, shapeColor, shape) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${shape} cx = "150" cy= "100" r="80" fill="${shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`
    }
}
const bob = new Circle('Boo','white' ,'blue', 'circle')
console.log(bob)
console.log(bob.render())
module.exports = Circle