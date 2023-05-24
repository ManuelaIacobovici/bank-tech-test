const Account = require('../src/account');
const Transaction = require('../src/transaction');

describe('Account', () => {

  it('starts with a value of 0', () => {
    const account = new Account();
    expect(account.balance()).toEqual(0);
  })
})