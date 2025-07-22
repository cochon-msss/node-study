const calc = require("sample-package"); // 1. sample-package 불러오기

const a = 17;
const b = 3;

console.log("a + b = ", calc.add(a, b)); // 더하기
console.log("a - b = ", calc.sub(a, b)); // 빼기
console.log("a * b = ", calc.multi(a, b)); // 곱하기
console.log("a / b = ", calc.div(a, b)); // 나누기
