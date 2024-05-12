function solution(arr) {
  arr.sort((a, b) => a - b);
  arr = arr.slice(1, arr.length - 1);
  let result = arr.reduce(function add(sum, value) {
    return sum + value;
  });
  return Math.floor(result / arr.length);
}
