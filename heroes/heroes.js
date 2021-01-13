const readline = require('readline');
const fs = require('fs');
const path = require('path');

const groupByHeroes = require('./groupByHeroes');
const lineToHero = require('./lineToHero');

const dirPath = path.join(__dirname, '/heroes.log');

const getDataFromFile = () => {
	let data = []
	return new Promise((resolve, reject) => {
		const file = readline.createInterface({
			input: fs.createReadStream(dirPath)
		})
		
		file.on('line', (line) => {
			const hero = lineToHero(line)
			if (hero) {
				data.push(hero)
			}
		})
		
		file.on('close', () => {
			// use shift to remove header of list heroes race
			const newData = data.shift();
			resolve(data)
		})
	})
};

const getData = async () => {
	const data = await getDataFromFile()
	return data
}

const getGroupHerois = async () => {
	const data = await getData()
	const herois = groupByHeroes(data)
	return herois
}

const heroes = {
	getData,
	getGroupHerois,
}

module.exports = heroes

