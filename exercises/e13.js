// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const accountsWithLowSum = [];
  for (let i = 0; i < array.length; i++) {
    let sumOfDeposits = 0;
    if (array[i].deposits != undefined) {
      for (let j = 0; j < array[i].deposits.length; j++) {
        sumOfDeposits += array[i].deposits[j];
      }
      if (sumOfDeposits < 2000) {
        accountsWithLowSum.push(array[i]);
      }
    } else {
      accountsWithLowSum.push(array[i]);
    }
  }
  return accountsWithLowSum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
