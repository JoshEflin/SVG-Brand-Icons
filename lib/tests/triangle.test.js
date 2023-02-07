const Triangle = require('../triangle');

describe('Shape', () => {
    test('should render svg of a triangle', () => {
      const triangle = new Triangle('BOO', 'white','blue');
      const str = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="white">BOO</text>
    </svg>`
  
      expect(triangle.render('BOO', 'white','blue')).toEqual(str);
    });
  });