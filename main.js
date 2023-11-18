const {
    createQueen, payTribute, hailTheQueen
} = require("./functions.js")

const database = {
    queens: [],
    tributeChest: []
}

const myQueens = database.queens
const myTributeChest = database.tributeChest
console.log(myQueens)
console.log(myTributeChest)

database.queens.push(createQueen(1, "Trinity Terry"))
database.queens.push(createQueen(2, "Athena Perez"))
database.queens.push(createQueen(3, "Charisse Ford"))
database.queens.push(createQueen(4, "Jenna Solis"))
database.queens.push(createQueen(5, "Shelby!"))
database.queens.push(createQueen(6, "Ramona"))
database.queens.push(createQueen(7, "Monica Dinglehopper"))

for (const queen of database.queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}

database.tributeChest.push(payTribute(99, "Arm", 3))
database.tributeChest.push(payTribute(101, "Leg", 1))
database.tributeChest.push(payTribute(103, "Tooth", 2))
database.tributeChest.push(payTribute(105, "Tesla", 2))
database.tributeChest.push(payTribute(107, "Big Hug", 5))

// for (const queen of database.queens) {
//     for (const tribute of database.tributeChest) {
//         if (queen.id === tribute.queenID) {
//             console.log(`${queen.name} got a ${tribute.description}`)
//         }
//     }
// }

for (const queen of database.queens) {
    database.tributeChest.find(tribute => { // tribute is a parameter to a created function with no name!
        if (tribute.queenID === queen.id) {
            console.log(`${queen.name} got a ${tribute.description}`)
        }
    })
}


module.exports = { database }