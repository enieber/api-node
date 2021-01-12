const readline = require('readline');
const fs = require('fs');

const getDataFromFile = () => {
	let data = []
	return new Promise((resolve, reject) => {
		const file = readline.createInterface({
			input: fs.createReadStream(__dirname + '/heroes/heroes.log')
		})
		
		file.on('line', (line) => {
			const lineSplit = line.split(';')

			if (lineSplit[1]) {
				const hora = lineSplit[0];
				const heroi = lineSplit[1];
				const numberReturn = lineSplit[2];
				const timeReturn = lineSplit[3];
				const vm = lineSplit[4];
			
				const obj = {
					hora,
					heroi,
					numberReturn,
					timeReturn,
					vm
				}
				data.push(obj)
			}
		})
		
		file.on('close', () => {
			const newData = data.shift();
			resolve(data)
		})
	})
};

const getData = async () => {
	const data = await getDataFromFile()
	return data
}

const groupByHeroes = (list) =>  list.reduce((r, a) => {
 r[a.make] = [...r[a.heroes] || [], a];
 return r;
}, {});

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

