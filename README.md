# SVG Logo Maker

A Node.js command-line application that allows you to generate custom logos as SVG files for your projects. Say goodbye to graphic designers, and create your own logos with ease.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [User Input](#user-input)
- [Output](#output)
- [Testing](#testing)
- [License](#license)

## Description

As a freelance web developer, you often need simple logos for your projects. This application is designed to make the logo creation process easy and efficient. It prompts you for text, text color, shape (choose from Circle, Square, or Triangle), and shape color, and generates a logo in SVG format.

## Installation

To use the SVG Logo Maker, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the repository's root directory in your terminal.
3. Install the required dependencies using the following command:
npm i jest
npm i inquirer@8.2.4

## Usage

To create a logo, run the application by entering the following command in your terminal: 

-- node index.js --

Follow the prompts to provide input for your logo.

## User Input

When running the application, you will be prompted for the following information:

1. Logo text: Enter up to three characters for your logo text.
2. Text color: Enter a color keyword or a hexadecimal color code for the text.
3. Choose a shape: Select a shape for your logo from Circle, Square, or Triangle.
4. Shape color: Enter a color keyword or a hexadecimal color code for the shape.

## Output

Once you've provided the required input, the application will generate your logo as an SVG file named `logo.svg` in the application's root directory. You'll also see a message in the command line: "Generated logo.svg."

## Testing

The application includes unit tests for the shape classes (Circle, Square, and Triangle) to ensure that the `render` methods correctly generate SVG content. You can run the tests using the following command:


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshot
https://drive.google.com/file/d/1VfcgzChrktmMYtRFNnS7QDZJy4Ool9Hp/view