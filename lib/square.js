
const Shape = require("./shape")

class Square extends Shape {
    constructor(text, textColor, shapeColor,) {
        super(text, textColor, shapeColor)
    }
    render(text, textColor, shapeColor ) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="25" width="200" height="200" fill="${shapeColor}/>
    <text x="125" y="130" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`

    }
}
module.exports = Square