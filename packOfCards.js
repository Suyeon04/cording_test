function solution(cards1, cards2, goal) {
  let cards1Length = 0;
  let cards2Length = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] == cards1[cards1Length]) {
      cards1Length++;
    } else if (goal[i] == cards2[cards2Length]) {
      cards2Length++;
    } else {
      return "No";
    }
  }
  return "Yes";
}
