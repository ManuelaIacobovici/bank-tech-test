const Transaction = require('./transaction')

class Account {
  constructor() {
    this.startBalance = 0;
    this.transactionHistory = [];
  }

  deposit(value) {
    const transaction = new Transaction(value, 'credit')
    this.transactionHistory.push(transaction);
  }

  withdraw(value) {
    if (value > Number(this.balance())) {
      return "Insufficient funds";
    } else {
      const transaction = new Transaction(value, 'debit');
      this.transactionHistory.push(transaction);
    }
  }

  balance(length) {
    if (length === undefined) length = this.transactionHistory.length
    return this.transactionHistory.slice(0, length + 1).map((transaction) => {
      if (transaction.type === 'credit') {
        return transaction.value;
      } else {
        return -1 * transaction.value;
      }
    }).reduce((total, value) => total + value, this.startBalance).toFixed(2)
  }

  statement(transaction) {
    const rows = ["date || credit || debit || balance"];
    this.transactionHistory.forEach((transaction, index) => {
      rows.push(`${transaction.date} || ${transaction.type === 'credit' ? transaction.value.toFixed(2) : '    '} || ${transaction.type === 'debit' ? transaction.value.toFixed(2) : '    '} || ${this.balance(index)}`)
    });
    return rows.join(`\n`);
  }
}

module.exports = Account;