const helpers = require('./helpers.js')

//Can add mocks file with exports, or add what you want to override here
jest.mock('uuid', () => {
    return () => '1234'
})

describe('helpers', () => {
    describe('makePerson', () => {
        it('should create a person', () => {
            const expected = {
                id: '1234',
                name: 'Frodo Baggins'
            }

            const actual = helpers.makePerson('Frodo', 'Baggins')

            expect(actual).toEqual(expected)
        })
    })

    describe('forEvenOnly()', () => {
        it('should invoke callback using the number passed when given an even number', () => {

            const spy = jest.fn();
            helpers.forEvenOnly(2, spy);
            helpers.forEvenOnly(4, spy);

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenNthCalledWith(1, 2);
            expect(spy).toHaveBeenNthCalledWith(2, 4);
        });

        it('should NOT invoke callback when given an odd number', () => {
            const spy = jest.fn();

            helpers.forEvenOnly(1, spy);

            expect(spy).not.toHaveBeenCalled();
        });

        it('returns a smile', () => {
            const spy = jest.fn(() => 'smile')

            const greeting = helpers.greet(spy)
            expect(greeting).toBe('frown')
        })
    })

})