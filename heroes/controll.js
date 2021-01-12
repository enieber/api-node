const RestifyErrors = require('restify-errors');

const heroes = require("./heroes");

const separateHerois = (herois, item) => {
	const heroisItem = herois[item]
	const sum = (acc, _item) => parseFloat(_item + acc)
	const getItems = (_item, position) => {
			return parseFloat(_item
				.timeReturn
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
		.map((_item) => parseFloat(_item.vm))

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
		const ha = heroisItem[heroisItem.length - 1].hora
		return {
			superHeroi: heroisItem[0].heroi, 
			time: `${minutesToShow}:${segundsToShow}`,
			finishRun,
			hora: ha
		}
	}

	return {
		superHeroi: heroisItem.heroi, 
		time: `${minutesToShow}:${segundsToShow}`,
		finishRun,
	}			
}

const orderByHora = (a, b) => {
	if (a.hora > b.hora) {
		return 1
	}
	if (a.hora < b.hora) {
		return -1
	}
	return 0
}

const controll = {
	list: async function(req, res, next) {
		try {
			const herois = await heroes.getGroupHerois()
			const heroisType = Object.keys(herois)
			const heroisList = heroisType
				.map((item) => separateHerois(herois, item))

			//filter herois finish run and reorder position
			const heroisToSave = heroisList
				.filter(item => item.finishRun)
				.sort(orderByHora)
				.map((item, index) => {
					return {
						position: index + 1,
						...item
					}
				})
			return res.send({ herois: heroisToSave });
		} catch (err) {
			const errMessage = new RestifyErrors
				.InternalServerError(err.message)
			return next(errMessage);
		}
	}
}

module.exports = controll
