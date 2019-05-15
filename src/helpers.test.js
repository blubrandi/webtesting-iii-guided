const helpers = require('./helpers.js')

describe('helpers', () => {

    describe('makePerson', () => {

        it('should create a person', () => {

            const expected = { id: 'how do I know the id from the db?', name: 'Frodo Baggins' }

            const actual - helpers.makePerson('Frodo', 'Baggins')

            expect(actual).toBe(expected)
        })
    })
})