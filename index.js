const {div, p} = require('./jsgen')

const test = div([], [
	p([], ['um']),
	p([], ['um'])
]);

console.log(test);