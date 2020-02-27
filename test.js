const {tags, attr} = require('./index')();
const {div, p} = tags;
const {href, classes} = attr;

const test = div('', []);
console.log(test);