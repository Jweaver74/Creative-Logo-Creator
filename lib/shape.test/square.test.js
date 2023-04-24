//import { square } from '../shapes.js';
const sqaure = require('../shapes.js');
// This is a test for the square shape with red background
describe('square', () => {
    Test('test for a square with a red background', () => {
        const shape = new square();
        shape.setcolor ("red");
        expect(shape.render()).toEqual(
            "<rect x="73" y="40" width="154" height="154" fill="red"/>"
        )
    })
})