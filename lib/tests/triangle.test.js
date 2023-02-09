const Triangle = require('../triangle');
// this test suite contains 2 tests. the first test makes sure that the entire shape's XML is returned, while the second test was given in the readme
// it doesnt render a complete logo, just the shape, with no text. 
describe('Shape', () => {
  test('should render svg of a triangle', () => {
    const triangle = new Triangle('BOO', 'white', 'blue',);
    const str = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="white">BOO</text>
    </svg>`

    expect(triangle.renderSVG('BOO', 'white', 'blue')).toEqual(str);
  });
  test('should give me just the one line', () => {

    const expectedShape = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    const shape = new Triangle('Boo', 'white', 'blue');
    shape.setColor("blue");
    expect(shape.render()).toEqual(expectedShape);

  })
});