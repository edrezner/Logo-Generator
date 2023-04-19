const { Circle, Triangle, Square } = require("./shapes");

describe("Shapes", () => {
  const mockData = {
    title: "SVC",
    text_color: "blue",
    shape_color: "pink",
  };

  describe("Circle", () => {
    it("should return a string for a circle SVG file with the given shape color, text color and logo text.", () => {
      const circle = new Circle(mockData);
      let actual = circle.render();
      let expected = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" fill="white" />
      <circle cx="150" cy="100" r="75" fill="pink" />
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">SVC</text>
      </svg>`;

      expect(actual).toEqual(expected);
    });
  });

  describe("Triangle", () => {
    it("should return a string for a triangle SVG file with the given shape color, text color and logo text.", () => {
      const triangle = new Triangle(mockData);
      let actual = triangle.render();
      let expected = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" fill="white" />
      <polygon points="150,10 290,150 20,150" fill="pink" />
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">SVC</text>
      </svg>`;

      expect(actual).toEqual(expected);
    });
  });

  describe("Square", () => {
    it("should return a string for a square SVG file with the given shape color, text color and logo text.", () => {
      const square = new Square(mockData);
      let actual = square.render();
      let expected = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" fill="white" />
      <rect x="72" y="20" width="150" height="150" fill="pink" />
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">SVC</text>
      </svg>`;

      expect(actual).toEqual(expected);
    });
  });
});
