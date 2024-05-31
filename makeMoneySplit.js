function test(money) {
  money = money.toString();
  let result = [];
  let i = 0;
  for (let moneyString of money) {
    if ((money.length - i) % 3 == 0 && i !== 0) {
      result.push(",");
    }
    result.push(moneyString);
    i++;
  }
  return result.join("");
}
