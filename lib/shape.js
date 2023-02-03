class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('shapes gotta be shapin, bru. Must contain a render method');
    }
    
}

module.exports = Shape