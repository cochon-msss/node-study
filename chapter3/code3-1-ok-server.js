const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // 1. 응답의 헤더 설정
  // text/html은 텍스트를 html로 해석하겠다는 의미
  res.end("OK"); // 2. ok 를 응답하고 종료
});

server.listen("3000", () => console.log("OK 서버 시작")); // 3. 접속 대기
