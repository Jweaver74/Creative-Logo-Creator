const { Circle, Square, Triangle } = require('./shapes.js');

// This is a test for the circle shape with blue background

describe("Circle test", () => {
    test('test for a circle with a blue background', () => {
        const shape = new Circle();
        shape.setColor ("blue");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="blue"/>'
        )
    })
})


// This is a test for the square shape with red background
describe('Square test', () => {
    test('test for a square with a red background', () => {
        const shape = new Square();
        shape.setColor ("red");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="150" height="150" fill="red"/>'
        )
    })
})


// This is a test for the triangle shape with purple background
describe('Triangle test', () => {
    test('test for a square with a purple background', () => {
        const shape = new Triangle();
        shape.setColor ("purple");
        expect(shape.render()).toEqual(
            '<polygon height="100%" width-"100%" points="150,18 244,182 56, 182" fill="purple"/>'
        )
    })
})