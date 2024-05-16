function solution(board) {
  var answer = 0;
  const len = board.length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == 1) {
      } else if (i != 0 && board[i - 1][j] == 1) {
      } else if (j != 0 && board[i][j - 1] == 1) {
      } else if (i != 0 && j != 0 && board[i - 1][j - 1] == 1) {
      } else if (i == len && board[i + 1][j] == 1) {
      } else if (j == len && board[i][j + 1] == 1) {
      } else if (i == len && j == len && board[i + 1][j + 1] == 1) {
      } else if (i != 0 && j == len && board[i - 1][j + 1] == 1) {
      } else if (j != 0 && i == len && board[i + 1][j - 1] == 1) {
      } else {
        answer++;
      }
    }
  }
  return answer;
}
