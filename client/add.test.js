const add = require('./add').add;
const mult = require('./add').mult;


test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('multiplies 2 * 2 to equal 4', () => {
    expect(mult(2, 2)).toBe(4);
})

test('function mult should be defined', () => {
    expect(mult).toBeDefined();
})