const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


/* 
* findArrayList has get true or false when find item in arratList
* @param item: number int
* @returns boolean
* @error when item is diff number
*/
const findArrayList = (item) => {
	const itemNumber = parseInt(item)
	if (typeof item	!== 'number' && isNaN(itemNumber)) {
		throw TypeError('the item is need int')
	}
	const as = arrayList.filter((itemArray) => {
		return itemArray == item
	})
	return as.length > 0
}

/*
* the checkArray
* @params content: two-dimensional array
* @returns number of repetion values contains is arrayList
* @error typerror { the content need array, two-dimensional array and typerror findArrayList error}
*/
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
			return findArrayList(y)
		})
		if (h.length > 0) {
			size = h.length
		}
	})
	return size
};

module.exports = checkArray

