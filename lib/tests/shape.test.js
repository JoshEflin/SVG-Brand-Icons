const Shape = require('../shape');

describe('Shape', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shape();
    const err = new Error('shapes gotta be shapin, bru. Must contain a render method')
    expect(shape.render).toThrow(err);
  });
});