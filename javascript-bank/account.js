/* exported Account */
// create a new Account constructor function with 2 parameters number, holder
// within the code block bind the holder, amount and transaction (which is an empty array) to the Account using the keyword this
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

// create three separate prototype methods get deposit, get withdrawal and get balance - in each look for the conditionals

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(deposit);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(withdraw);
    return true;

  }
  return false;
};

Account.prototype.getBalance = function (number, holder) {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    }
    if (transaction.type === 'withdrawal') {
      balance -= transaction.amount;
    }
  }
  return balance;
};
