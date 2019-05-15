const uuid = require('uuid')

module.exports = {
    makePerson,
}

function makePerson(first, last) {
    return {
        id: uuid(),
        name: `${first} ${last}`
    }
}