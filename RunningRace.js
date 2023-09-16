// 수준 : level : 1(그 중에서 어려운 편)
// 포인트 : 시간 복잡도
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const playerIndices = new Map();
  for (let i = 0; i < players.length; i++) {
    playerIndices.set(players[i], i);
  }

  const result = [...players]; // 원본 배열 복사

  for (let i = 0; i < callings.length; i++) {
    const callingPlayer = callings[i];
    const callingPlayerIndex = playerIndices.get(callingPlayer);

    if (callingPlayerIndex !== undefined && callingPlayerIndex !== 0) {
      // callingPlayer와 그 앞의 플레이어의 위치를 변경
      playerIndices.set(callingPlayer, callingPlayerIndex - 1);
      playerIndices.set(result[callingPlayerIndex - 1], callingPlayerIndex);

      // 배열 요소를 직접 교환하지 않고 인덱스만 변경
      [result[callingPlayerIndex], result[callingPlayerIndex - 1]] = [
        result[callingPlayerIndex - 1],
        result[callingPlayerIndex],
      ];
    }
  }

  return result;
}
