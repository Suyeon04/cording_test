function solution(nums) {
  const typeLength = [...new Set(nums)].length;
  const maxAnswer = nums.length / 2;
  return maxAnswer < typeLength ? maxAnswer : typeLength;
}
