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
})