const groupByHeroes = require('./groupByHeroes');

describe('test the groupByHeroes function', () => {
	it('should not import groupByHeroes undefined', () => {
		expect(groupByHeroes).not.toBeUndefined();
	})
	it('should return group bob and dilan', () => {
		const listHeroes = [
			{
				superHero: 'bob',
				time: 1,
			},
			{
				superHero: 'dilan',
				time: 2,
			},
			{
				superHero: 'bob',
				time: 2,
			},
			{
				superHero: 'dilan',
				time: 1,
			}
		]
		const result = groupByHeroes(listHeroes)
		expect(result).toEqual(
			{
				'bob': [
					{
						superHero: 'bob',
						time: 1,
					},
					{
						superHero: 'bob',
						time: 2,
					}
				],
			'dilan': [
					{
						superHero: 'dilan',
						time: 2,
					},
					{
						superHero: 'dilan',
						time: 1,
					}
				],
		})
	})
	it('should return [] when send []', () => {
		expect(groupByHeroes([])).toEqual([]);	
	})
});

