// 수준 : level : 1(그 중에서 어려운 편)
// 포인트 : 시간 복잡도
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  // 맵 만들기
  // playerIndices = {"mumu" => 0,"soe" => 1, ...}
  // 이런 식으로 바꾸는 코드
  //  name이 key이기 때문에 playerIndices["mumu"] == 0
  // 이런 식으로 리턴되어서 시간 복잡도에서 이점을 차지한다
  const playerIndices = new Map();
  for (let i = 0; i < players.length; i++) {
    playerIndices.set(players[i], i);
  }

  // 원본 배열 복사
  const result = [...players];

  for (let i = 0; i < callings.length; i++) {
    const callingPlayer = callings[i];
    // playerIndices에서 불린 이름 index 가져가기
    const callingPlayerIndex = playerIndices.get(callingPlayer);

    // playerIndices에서 불린 이름이 0이거나, undefined인 경우 제외 시키기
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
