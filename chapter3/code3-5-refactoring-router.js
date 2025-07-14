const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

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

const urlMap = {
  "/": (req, res) => res.end("HOME"),
  "/user": user,
  "/feed": feed,
};
