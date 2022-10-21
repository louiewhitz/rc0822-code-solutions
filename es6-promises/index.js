const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Louisa');

promiseObj.then(fulfilled => {
  console.log(fulfilled);
  return fulfilled;
});

promiseObj.catch(err => {
  console.error(err.message);
  return err;
});

console.log(promiseObj);
