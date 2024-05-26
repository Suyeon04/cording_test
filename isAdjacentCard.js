function solution(puzzle, word) {
  let row = 0;
  let col = 0;
  const len = puzzle.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (puzzle[i][j] == word[0]) {
        row = i;
        col = j;
      }
    }
  }
  for (let i = 1; i < len; i++) {
    if (row != 0 && puzzle[row - 1][col] == word[i]) {
      row--;
    } else if (row != len && puzzle[row + 1][col] == word[i]) {
      row++;
    } else if (col != 0 && puzzle[row][col - 1] == word[i]) {
      col--;
    } else if (col != len && puzzle[row][col + 1] == word[i]) {
      col++;
    } else {
      return false;
    }
  }
  return true;
}
