const {getGreeting, getColor} = require('./project')

// const getGreeting = require('./project');
// const getColor = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('state favorite color', () => {
  expect(getColor('blue')).toBe("My favorite color is blue");
});