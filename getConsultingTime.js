function solution(customer) {
  var answer = 0;
  customer.sort((a, b) => a[0] - b[0]);
  let startConsult = customer[0][0];
  let endConsult = customer[0][1];
  for (let i = 1; i < customer.length; i++) {
    const [start, end] = customer[i];
    if (endConsult > start) {
      endConsult = end > endConsult ? end : endConsult;
    } else {
      answer += endConsult - startConsult;
      startConsult = start;
      endConsult = end;
    }
  }
  answer += endConsult - startConsult;
  return answer;
}
