//Import triangle from shapes.js
const triangle = require('../shapes.js');
// This is a test for the triangle shape with purple background
describe('triangle', () => {
    Test('test for a square with a purple background', () => {
        const shape = new triangle();
        shape.setcolor ("purple");
        expect(shape.render()).toEqual(
            "<polygon points="150,40 73,250 227,250" fill="purple"/>"
        )
    })
})