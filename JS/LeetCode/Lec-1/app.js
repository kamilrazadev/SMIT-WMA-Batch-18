/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length) return undefined;
    // 2       // 0
    // 7       // 1
    var firstNum = nums[i];
    console.log(`First loop: firstNum: ${firstNum} = index:${i}`);

    for (let j = i + 1; j < nums.length; j++) {
      // 2       // 0
      // 7       // 1
      // 11       // 2
      // 15       // 3

      var secondNum = nums[j];
      console.log(`Second loop: secondNum: ${secondNum} = nums[j]:${j}`);

      var isAdditionFound = firstNum + secondNum === target;
      //   console.log("isAdditionFound: ", isAdditionFound);
      if (isAdditionFound) return [i, j];
    }
  }
};

// Input: nums = [2,7,11,15], target = 18
// Output: [?,?]

let ans = twoSum([2, 7, 11, 15], 4);
console.log("result:", ans);
