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

function forEvenOnly(number, callback) {
    if (number % 2 === 0) {
        callback(number);
    }
}

function greeter(callback) {
    return cb()
}