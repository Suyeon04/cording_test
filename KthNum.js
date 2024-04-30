function solution(array, commands) {
  var answer = [];
  for (let data of commands) {
    const [sliceStartIndex, sliceEndIndex, sortNum] = data;
    const sliceData = array.slice(sliceStartIndex - 1, sliceEndIndex);
    sliceData.sort(function (a, b) {
      return a - b;
    });
    answer.push(sliceData[sortNum - 1]);
  }
  return answer;
}
