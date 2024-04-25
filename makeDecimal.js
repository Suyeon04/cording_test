function solution(nums) {
  var answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let x = j + 1; x < nums.length; x++) {
        const sum = nums[i] + nums[j] + nums[x];
        if (sum % 2 == 1) {
          let isDecimal = true;
          for (let y = 3; y * y <= sum; y += 2) {
            if (sum % y == 0) {
              isDecimal = false;
              break;
            }
          }
          if (isDecimal) answer++;
        }
      }
    }
  }
  return answer;
}
