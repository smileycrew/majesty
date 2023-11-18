//const { database } = require("./functions.js")

const createQueen = (queenID, queenName) => {
    const queenObject = {
        id: queenID,
        name: queenName

    }
    return queenObject
}

const payTribute = (tributeID, tributeDescription, queenID) => {
    const tributeObject = {
        id: tributeID,
        description: tributeDescription,
        queenID: queenID
    }
    return tributeObject
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

module.exports = {
    createQueen, payTribute, hailTheQueen
}