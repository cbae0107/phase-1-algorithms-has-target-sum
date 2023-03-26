function hasTargetSum(array, target) {
  const num1 = {};
  
 for (const number of array){
  const num2 = target - number;
  if (num2 in num1) 
    return true;
    num1[number] = true

 }
 return false
}

  // 1. Function receives two arguments, an Array and a Target
  // 2. If any pair in the Array equals to the Target, return true
  // 3. Else return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
