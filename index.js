const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Function to collect user input
function collectUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex code):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex code):',
    },
  ]);
}

// Function to generate SVG and save it to logo.svg
function generateAndSaveSVG(data) {
  let svgContent;
  let shape;

  switch (data.shape) {
    case 'Circle':
      shape = new Circle(50, data.shapeColor);
      break;
    case 'Square':
      shape = new Square(80, data.shapeColor);
      break;
    case 'Triangle':
      shape = new Triangle(50, 100, data.shapeColor);
      break;
    default:
      console.error('Invalid shape selection.');
      return;
  }

  // Set the text content for the shape
  shape.text = data.text;

  svgContent = shape.render();

  fs.writeFileSync('logo.svg', svgContent); // Write the generated SVG content to logo.svg
  console.log('Generated logo.svg');
}

// Main function to run the logo generation process
async function main() {
  try {
    const userInput = await collectUserInput(); // Collect user input
    generateAndSaveSVG(userInput); // Generate and save the SVG
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Start the logo generation process
main();
