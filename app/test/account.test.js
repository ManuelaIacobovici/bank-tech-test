const Account = require('../src/account');
const Transaction = require('../src/transaction');

describe('Account', () => {

  it('starts with a value of 0', () => {
    const account = new Account();
    expect(account.balance()).toEqual(0);
  })

  it('lets you deposit a value', () => {
    const account = new Account();
    account.deposit(1000);
    expect(account.balance()).toEqual(1000);
  })
})