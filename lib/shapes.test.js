test('Circle render method generates correct SVG', () => {
  // Create a Circle instance with radius and color
  const circle = new Circle(50, 'red');

  // Generate the expected SVG content based on the provided properties
  const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="50" fill="red" />
      <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="white">Your Text</text>
    </svg>
  `;

  // Use toEqual to compare the generated SVG with the expected SVG
  expect(circle.render()).toEqual(expectedSVG);
});

test('Square render method generates correct SVG', () => {
  // Create a Square instance with side and color
  const square = new Square(80, 'green');

  // Generate the expected SVG content based on the provided properties
  const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="green" />
      <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="white">Your Text</text>
    </svg>
  `;

  // Use toEqual to compare the generated SVG with the expected SVG
  expect(square.render()).toEqual(expectedSVG);
});

test('Triangle render method generates correct SVG', () => {
  // Create a Triangle instance with base, height, and color
  const triangle = new Triangle(50, 100, 'blue');

  // Generate the expected SVG content based on the provided properties
  const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,10 125,190 175,190" fill="blue" />
      <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="white">Your Text</text>
    </svg>
  `;

  // Use toEqual to compare the generated SVG with the expected SVG
  expect(triangle.render()).toEqual(expectedSVG);
});
