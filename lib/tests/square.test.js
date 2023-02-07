const Square = require('../square');

describe('Shape', () => {
    test('should render svg of a square', () => {
      const square = new Square('BOO', 'white','blue', );
      const str = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="25" width="200" height="200" fill="blue"/>
    <text x="125" y="130" font-size="60" text-anchor="middle" fill="white">BOO</text>
    </svg>`
      expect(square.render('BOO', 'white','blue')).toEqual(str);
    });
  });