class Shape {
  constructor(color) {
    this.color = color;
    this.text = '';
    this.textColor = 'white'
  }

  render() {
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
        <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
    `;
  }
}

class Square extends Shape {
  constructor(side, color) {
    super(color);
    this.side = side;
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.side}" height="${this.side}" fill="${this.color}" />
        <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(base, height, color) {
    super(color);
    this.base = base;
    this.height = height;
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 125,190 175,190" fill="${this.color}" />
        <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
    `;
  }
}

module.exports = { Circle, Square, Triangle };
