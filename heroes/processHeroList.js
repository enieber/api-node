/*
*  separateHeroes
*
*  @params {
*  	heroesOrder,
*  	superHero: string
*  }
*  @return 
* */
const separateHeroes = (herois, superHero) => {
	const heroisItem = herois[superHero]
	const sum = (acc, _item) => parseFloat(_item + acc)

	const getItems = (_item, position) => {
			return parseFloat(_item
				.timeOfRace
				.split(':')[position]
			)
	}

	const minutes =	heroisItem
		.map((_item) => getItems(_item, 0))
		.reduce(sum, 0)
	
	const segunds =	heroisItem
		.map((_item) => getItems(_item, 1))
		.reduce(sum, 0)

	const velocity = heroisItem
		.map((_item) => parseFloat(_item.velocity))

	const moreMinutes = segunds / 60;

	let minutesToShow
	let segundsToShow
	
	if (moreMinutes > 1) {
		const countMinutes = moreMinutes + minutes
		const countSegunds = segunds % 60
		minutesToShow = parseInt(countMinutes.toFixed(0))
		segundsToShow = countSegunds
	} else {
		minutesToShow = minutes
		segundsToShow = segunds
	}

	const finishRun = heroisItem.length >= 4
	if (finishRun) {
		const horaSum = heroisItem[heroisItem.length - 1].hora
		return {
			superHero, 
			time: `${minutesToShow}:${segundsToShow}`,
			finishRun,
			hora: horaSum
		}
	}

	return {
		superHero, 
		time: `${minutesToShow}:${segundsToShow}`,
		finishRun,
	}			
}

module.exports = separateHeroes
