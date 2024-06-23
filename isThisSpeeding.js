function solution(speed_limit, cameras) {
  var answer = 0;
  let startDistance = 0;
  let startTime = 0;
  for (let data of cameras) {
    const [endDistance, endTime] = data;
    const result = (endDistance - startDistance) / (endTime - startTime);
    if (result > speed_limit) {
      answer++;
    }

    startDistance = endDistance;
    startTime = endTime;
  }
  return answer;
}
