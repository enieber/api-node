/*
* lineToHero function
*	@params line in string
*	@return object hero
*
*	Object Hero
*	{
*		hora: string,
*		superHero: string,
*		numberOfRace: number,
*		timeOfRace: string,
*		velocity: string,
*	}
*/
const lineToHero = (line) => {
	const lineSplit = line.split(';');
	
	if (lineSplit[1]) {
		const hora = lineSplit[0];
		const superHero = lineSplit[1];
		const numberOfRace = lineSplit[2];
		const timeOfRace = lineSplit[3];
		const velocity = lineSplit[4];

		const hero = {
			hora,
			superHero,
			numberOfRace,
			timeOfRace,
			velocity,
		}
		return hero
	}

	return null
}

module.exports = lineToHero
