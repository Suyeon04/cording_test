function solution(participant, completion) {
  let answer = [];
  for (let person of participant) {
    if (!!answer[person]) {
      answer[person]++;
    } else {
      answer[person] = 1;
    }
  }
  for (let person of completion) {
    answer[person]--;
  }
  for (let data in answer) {
    if (answer[data] != 0) {
      return data;
    }
  }
}

function solution(participant, completion) {
  for (let person of completion) {
    const index = participant.indexOf(person);
    participant.splice(index, 1);
  }
  return participant[0];
}

function solution(participant, completion) {
  let answer = {};
  for (let person of completion) {
    answer[person] = (answer[person] || 0) + 1;
  }
  for (let person of participant) {
    if (!answer[person] || answer[person] <= 0) {
      return person;
    }
    answer[person]--;
  }
}
