const { tagList, attrList } = require('./data/data');

const haipa = {
	tags: require('./factories/tags')(tagList),
	attr: require('./factories/attr')(attrList)
}

module.exports = haipa;