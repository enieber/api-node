const lineToHero = require('./lineToHero')

describe('test lineToHero function', () => {
	it('should not import lineToHero undefined', () => {
		expect(lineToHero).not.toBeUndefined();
	});
	const expectedValue = {
		hora: '10:20',
		superHero: 'Bob Esponja',
		numberOfRace: '1',
		timeOfRace: '1:18:006',
		velocity: '590,633',
	}
	const input = '10:20;Bob Esponja;1;1:18:006;590,633'

	it(`should retun hero
		object = ${expectedValue}
		when send line = ${input}`, () => {
		expect(lineToHero(input)).toEqual(expectedValue)
	})
	it(`should return null when send ''`, () => {
		expect(lineToHero('')).toBeNull();
	})

});
