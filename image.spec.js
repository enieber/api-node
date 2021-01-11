const image = require('./image')

describe('Test image function', () => {
	it('should import image not undefined', () => {
		expect(image).not.toBeUndefined()
	})
	it('should retun 1 when pass Array([1, 22, 33], [44, 55, 66])', () => {
		const array = Array([1, 22, 33], [44, 55, 66])
		expect(image(array)).toEqual(1)
	})
	it('should retun 2 when pass Array([1, 2, 33], [44, 55, 66])', () => {
		const array = Array([1, 2, 33], [44, 55, 66])
		expect(image(array)).toEqual(2)
	})
	it('should retun 3 when pass Array([1, 2, 3], [44, 55, 66])', () => {
		const array = Array([1, 2, 3], [44, 55, 66])
		expect(image(array)).toEqual(3)
	})
	it('should TypeError when send "123"', () => {
		try {
			const value = '123'
			image(value)
		} catch (err) {
			expect(err).toEqual(new TypeError("the content input is array"))
		}
	})
	it('should TypeError when send ["123"]', () => {
		try {
			const value = ['123']
			image(value)
		} catch (err) {
			expect(err).toEqual(new TypeError("the array content is need be two-dimensional"))
		}
	})
	it('should retun 0 when pass Array([100, 200, 300], [44, 55, 66])', () => {
		const array = Array([100, 200, 300], [44, 55, 66])
		expect(image(array)).toEqual(0)
	})
})
