const haipa = (useSvg) => {
	const data = require('./data/data')(useSvg);
	return {
		tags: require('./factories/tags')(data.tags),
		attr: require('./factories/attr')(data.attr)
	}
}

module.exports = haipa;