function solution(s) {
  var answer = "";
  let data = s.split(" ");
  data = data.sort((a, b) => a - b);
  return data[0] + " " + data[data.length - 1];
}
