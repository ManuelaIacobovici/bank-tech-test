class Transaction {
  constructor(value, type) {
    this.value = value;
    this.type = type;
    this.date = new Date().toLocaleDateString('en-GB');
  }
}

module.exports = Transaction;
