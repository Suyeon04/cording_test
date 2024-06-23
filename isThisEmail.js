function solution(emails) {
  var answer = 0;
  const labelDomail = ["com", "net", "org"];
  for (const email of emails) {
    const [namePart, domainPart] = email.split("@");
    if (namePart && domainPart && namePart.length >= 1) {
      const emailDomain = domainPart.split(".");
      if (
        emailDomain.length === 2 &&
        emailDomain[0].length >= 1 &&
        labelDomail.includes(emailDomain[emailDomain.length - 1])
      ) {
        answer++;
      }
    }
  }
  return answer;
}
