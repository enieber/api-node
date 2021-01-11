const image = require('./image')

const verifyCheckArray = (content) => {
	const size = image(content)
	return `The image has ${size} items of arrayBitmap`
};

module.exports = verifyCheckArray

