const user = {
    name: "Melissa",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(typeOfTransaction) {
    let maxValue = 0
    let maxTransaction

    for (transaction of user.transactions) {
        if (transaction.type == typeOfTransaction && transaction.value > maxValue) {
            maxValue = transaction.value
            maxTransaction = transaction
        }
    }

    return maxTransaction
}

function getAverageTransactionValue() {
    let sum = 0
    
    for (transaction of user.transactions) {
        sum = sum + transaction.value
    }

    const average = sum / user.transactions.length

    return average
}

function getTransactionCount() {
    let count = {
        credit: 0,
        debit: 0
    }

    for (transaction of user.transactions) {
        if (transaction.type == 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance)

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

console.log(getAverageTransactionValue())

console.log(getTransactionCount())