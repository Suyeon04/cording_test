function solution(survey, choices) {
  var answer = "";
  const scoreData = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    const surveyData = survey[i].split("");
    if (choices[i] < 4) {
      scoreData[surveyData[0]] += 4 - choices[i];
    } else {
      scoreData[surveyData[1]] += choices[i] - 4;
    }
  }
  answer =
    (scoreData["R"] < scoreData["T"] ? "T" : "R") +
    (scoreData["C"] < scoreData["F"] ? "F" : "C") +
    (scoreData["J"] < scoreData["M"] ? "M" : "J") +
    (scoreData["A"] < scoreData["N"] ? "N" : "A");
  return answer;
}

