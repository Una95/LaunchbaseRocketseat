const users = [
    {
        name: "Salvio",
        incomings: [115.3, 48.7, 98.3, 14.5],
        expenses: [83.3, 12.1, 120.0]
    },
    {
        name: "Marcio",
        incomings: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        incomings: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function sumNumbers(numbers) {
    let sum = 0
    for (let value in numbers) {
        sum = sum + numbers[value]
    }

    return sum
}

function calcbalance(balance) {
    const totexpenses = sumNumbers(balance.expenses)
    const totincomings = sumNumbers(balance.incomings)
    const totalBalance = totincomings - totexpenses
    return totalBalance.toFixed(2)
}

for (let i = 0; i < users.length; i++) {
    const balance = calcbalance(users[i])
    if (balance > 0) {
        console.log(`${users[i].name}'s balance: ${balance} is POSITIVE`)
    } else {
        console.log(`${users[i].name}'s balance: ${balance} is NEGATIVE`)
    }
}