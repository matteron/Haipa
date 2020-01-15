const {div, p} = require('./tags');
const {id, href, classes} = require('./attr');

const test = div([], [
	p([id`top`, classes`brap`], [
		'um'
	]),
	p([], ['um'])
]);

console.log(test);

//const brap = class`tets btn`;

//console.log(brap);