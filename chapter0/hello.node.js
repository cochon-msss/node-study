const http = require("http"); // 1. http 객체 생성
// require() 함수는 모듈을 읽어오는 함수이다.
/// 모듈명과 변수명을 다르게 해도 문제는 없지만 특별한 경우가 동일하게 짓는 것이 관행이다.

let count = 0;

// 노드 서버 객체 생성
const server = http.createServer((req, res) => {
  console.log((count += 1));
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("hello\n");
  // prettier-ignore
  setTimeout(() =>{
    res.end("Node.js");
  },2000)
});

server.listen(8000, () => console.log("Hello Node.js"));
