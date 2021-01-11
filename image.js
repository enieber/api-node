const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const findMap = (item) => {
	const as = arrayList.filter((itemArray) => {
		return itemArray == item
	})
	return as.length > 0
}

const checkArray = (content) => {
	if (!Array.isArray(content)) {
		throw TypeError('the content input is array')
	}

	let size = 0
	content.map(contentItem => {
		if (!Array.isArray(contentItem)) {
			throw TypeError('the array content is need be two-dimensional')
		}
		const h = contentItem.filter(y => {
			return findMap(y)
		})
		if (h.length > 0) {
			size = h.length
		}
	})
	return size
};

module.exports = checkArray

