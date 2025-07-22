// 1. 모듈을 require 함수로 포함 시킬 때 실행됩니다.
// require() 함수로 모듈을 읽을 때 파일을 위에서보터 읽습니다.
console.log("require로 부르면 실행됩니다.");

// module.exports는 require를 사용해 불러왔을 때 반환하는 객체를 저장하는 변수
// module은 현재 모듈을 의미하며
// export는 외부에 노출할 객체를 저장하는 변수
module.exports = {
  // 2. 외부로 노출할 객체를 저장합니다.
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
  div: (a, b) => a / b,
};
