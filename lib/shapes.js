class Circle {
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

  <circle cx="150" cy="100" r="75" fill=${this.shape_color} />

  <text x="150" y="100" font-size="60" text-anchor="middle" fill=${this.text_color}>${this.text}</text>

</svg>`;
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

  <polygon points="150,50 250,150 50,150" fill=${this.shape_color} />

  <text x="150" y="100" font-size="60" text-anchor="middle" fill=${this.text_color}>${this.text}</text>

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

  <rect x="50" y="50" width="150" height="150" fill=${this.shape_color} />

  <text x="150" y="100" font-size="60" text-anchor="middle" fill=${this.text_color}>${this.text}</text>

</svg>`;
    }
}

function generateLogo(data) {
    let shape;

    if (data.shape === 'Circle') {
        shape = new Circle(data);
    } else if (data.shape === 'Triangle') {
        shape = new Triangle(data);
    } else {
        shape = new Square(data);
    }

    return shape.render();
}

module.exports = generateLogo;