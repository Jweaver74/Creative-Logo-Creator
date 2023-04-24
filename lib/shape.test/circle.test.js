// import the circle shape from the shapes.js file

const circle = require('../shapes.js');

// This is a test for the circle shape with blue background

describe('circle', () => {
    Test('test for a circle with a blue background', () => {
        const shape = new circle();
        shape.setcolor ("blue");
        expect(shape.render()).toEqual(
            "<circle cx="150" cy="115" r="80" fill="blue"/>"
        )
    })
})