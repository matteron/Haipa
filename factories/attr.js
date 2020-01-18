function kebabeToCamel(s) {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase().replace('-', '');
  });
};

function createAttr(attrName) {
	return function(prop) {
		return `${attrName}="${prop}"`
	}
}

function createAttributes(arr) {
	const out = { classes: createAttr('class') };
	var result = arr.forEach(a => out[kebabeToCamel(a)] = createAttr(a));
	return out;
}

module.exports = (attrList) => createAttributes(attrList);