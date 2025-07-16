const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    // 객체와 함께 in 연산자를 사용하면 객체의 키가 있는지 검사
    if (path in urlMap) {
      // 1. urlMap에 path가 있는지 확인
      urlMap[path](req, res); // 2. urlMap에 path값으로 매핑된 함수 실행
    } else {
      notFound(req, res);
    }
  })
  .listen("3000", () => console.log("라우터를 실행해보자!"));

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
  res.end(`<ul>
          <li>picture1</li>
          <li>picture2</li>
          <li>picture3</li>
          </ul>`);
};

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page not found");
};

// 코드의 가장 하단에 urlMap을 추가한 이유는 user(), feed() 함수보다 위에 있으면
// 에러가 나기 떄문에 const로 선언한 변수들은 초기화 전에 읽을 수는 없어서 에러가 나게된다.
const urlMap = {
  "/": (req, res) => res.end("HOME"),
  "/user": user,
  "/feed": feed,
};
