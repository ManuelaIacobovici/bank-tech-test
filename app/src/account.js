const Transaction = require('./transaction')

class Account {
  constructor() {
    this.startBalance = 0;
    this.transactionHistory = [];
  }

  balance(length) {
    if (length === undefined) length = this.transactionHistory.length
    return this.transactionHistory.slice(0, length + 1).map((transaction) => {
      if (transaction.type === 'credit') {
        return transaction.value;
      } else {
        return -1 * transaction.value;
      }
    }).reduce((total, value) => total + value, this.startBalance)
  }
}

module.exports = Account;