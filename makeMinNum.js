function test(data) {
  data = data.split(", ").map(Number);
  data.sort((a, b) => a - b);

  if (data[0] === 0 || data[1] === 0) {
    if (data.length > 3) {
      let changeIndex = 1;
      while (changeIndex < data.length) {
        if (data[0] === 0) {
          [data[0], data[changeIndex]] = [data[changeIndex], data[0]];
          changeIndex++;
          if (data[1] === 0 && changeIndex < data.length) {
            [data[1], data[changeIndex]] = [data[changeIndex], data[1]];
            changeIndex++;
          }
        } else {
          break;
        }
      }
      if (data[0] === 0 || data[1] === 0) {
        return -1;
      }
    } else {
      return -1;
    }
  }

  let firstNum = [];
  let secondNum = [];

  for (let i = 0; i < data.length; i++) {
    if (i % 2 === 0) {
      firstNum.push(data[i]);
    } else {
      secondNum.push(data[i]);
    }
  }
  return parseInt(firstNum.join("")) + parseInt(secondNum.join(""));
}
