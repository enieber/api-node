const groupByHeroes = (list) =>  {
	if (list.length > 0 ) {
		return list.reduce((r, a) => {
			if (a.superHero) {
				r[a.superHero] = [...r[a.superHero] || [], a];
			}
			return r;
			}, {});
	}
	return []
}
module.exports = groupByHeroes
