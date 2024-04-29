function solution(dots) {
  let x = [dots[0][0], 0];
  let y = [dots[0][1], 0];
  for (let i = 1; i < dots.length; i++) {
    if (x[0] != dots[i][0]) {
      x[1] = dots[i][0];
    }
    if (y[0] != dots[i][1]) {
      y[1] = dots[i][1];
    }
  }
  return Math.abs(x[0] - x[1]) * Math.abs(y[0] - y[1]);
}
