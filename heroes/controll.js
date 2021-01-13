const RestifyErrors = require('restify-errors');

const heroes = require("./heroes");
const separateHeroes = require('./separateHeroes');

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
			let a
			const heroisList = heroisType
				.map((item) => {
					const data = separateHeroes(herois, item)
					return data
				})

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
