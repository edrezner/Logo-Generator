class Circle {
  constructor(data) {
    this.text = data.title;
    this.text_color = data.text_color;
    this.shape_color = data.shape_color;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="white" /><circle cx="150" cy="100" r="75" fill="${this.shape_color}" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`;
  }
}

class Triangle {
  constructor(data) {
    this.text = data.title;
    this.text_color = data.text_color;
    this.shape_color = data.shape_color;
  }
  render() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="300" height="200" fill="white" />

  <polygon points="150,10 290,150 20,150" fill=${this.shape_color} />

  <text x="150" y="115" font-size="60" text-anchor="middle" fill=${this.text_color}>${this.text}</text>

</svg>`;
  }
}

class Square {
  constructor(data) {
    this.text = data.title;
    this.text_color = data.text_color;
    this.shape_color = data.shape_color;
  }
  render() {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="300" height="200" fill="white" />

  <rect x="72" y="20" width="150" height="150" fill=${this.shape_color} />

  <text x="150" y="115" font-size="60" text-anchor="middle" fill=${this.text_color}>${this.text}</text>

</svg>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};

// To DO:
// function that validates color; check if entered proper hex code (use RegEx possibly)
// break up color questions by if they want to use a hex code or text string
