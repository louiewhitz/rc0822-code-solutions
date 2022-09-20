/* exported Bank */
//  create constructor function with nextAccountnumber = 1 and accounts
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

//  if there is no other account holer in the system, then make an account, if there is increment the holders account number and push it to the accounts array

//  create 3 prototypeMethods

// properties we have -- number, holder, balance, deposit, withdrawal & transactions
Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    this.nextAccountNumber++;
    account.deposit(balance);
    this.accounts.push(account);
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  if (Number.isInteger(number) && number !== 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      var account = this.accounts[i];
      if (account.number === number) {
        return account;
      }
    }
  }
  return null;
};

// calculates total balances of all accounts
// if there are no accounts, return 0;

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;

  if (this.accounts.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    var balance = account.getBalance();
    totalAssets += balance;
  }
  return totalAssets;
};
