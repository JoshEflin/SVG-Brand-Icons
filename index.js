// ## User Story

// ```md
// AS a web developer
// I WANT to generate a simple logo for my projects
// SO THAT I can have a logo for my projects without paying for a designer.
// ```

// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to 3 characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from including: circle, triangle, or square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered all prompts
// THEN an SVG file is created named `logo.svg`
// AND "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered.
// ```

// The following example test should pass:

// ```js
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');