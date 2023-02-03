const Circle = require ('./circle');

describe('Shape', () => {
  test('should render svg of a circle', () => {
    const circle = new Circle('BOO', 'white','blue', 'circle');
    const str = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx = "150" cy= "100" r="80" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BOO</text>
</svg>`
    expect(circle.render('BOO', 'white','blue', 'circle')).toEqual(str);
  });
});