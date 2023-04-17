const { Circle } = require("./shapes");

describe("Shapes", () => {
  const mockData = {
    title: "SVC",
    text_color: "blue",
    shape_color: "pink",
  };
  describe("Circle", () => {
    it("should return a string for the corresponding SVG file with the given shape color.", () => {
      const circle = new Circle(mockData);
      const actual = circle.render();
      const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="white" /><circle cx="150" cy="100" r="75" fill="pink" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">SVC</text></svg>`;

      expect(actual).toBe(expected);
    });
  });
});
