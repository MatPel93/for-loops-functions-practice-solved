// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  const depositsOverOneHundred = [];
  for (let i = 0; i < array.length; i++) {
    const depositsValue = array[i].deposits;
    if (depositsValue != undefined) {
      for (let j = 0; j < depositsValue.length; j++) {
        if (depositsValue[j] > 100) {
          depositsOverOneHundred.push(depositsValue[j]);
        }
      }
    }
  }
  return depositsOverOneHundred;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
