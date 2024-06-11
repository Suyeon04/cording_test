"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'findConsistentLogs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY userEvent as parameter.
 */

function findConsistentLogs(userEvent) {
  // Write your code here
  let doneArray = [];
  let min = 1000;
  let answer = 0;
  for (let event of userEvent) {
    if (!doneArray.includes(event)) {
      let count = userEvent.filter((e) => e === event).length;
      if (min > count) {
        min = count;
      }
      doneArray.push(event);
    }
  }
  console.log(min);
  for (let i = userEvent.length - 1; i >= 0; i--) {
    let isTrue = true;
    for (let j = 0; j + i < userEvent.length; j++) {
      for (let x = j; x <= i + j; x++) {
        let count = userEvent.filter((e) => e === userEvent[x]).length;
        if (count > min) {
          isTrue = false;
          break;
        }
      }
      if (isTrue) {
        break;
      }
    }
    if (isTrue) {
      answer = i + 1;
      break;
    }
  }
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const userEventCount = parseInt(readLine().trim(), 10);

  let userEvent = [];

  for (let i = 0; i < userEventCount; i++) {
    const userEventItem = parseInt(readLine().trim(), 10);
    userEvent.push(userEventItem);
  }

  const result = findConsistentLogs(userEvent);

  ws.write(result + "\n");

  ws.end();
}
