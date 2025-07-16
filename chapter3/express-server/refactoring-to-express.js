const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("익스페리스로 라우터 리팩터링하기");
});

// 1. GET 메서드의 라우팅 설정
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
  const user = url.parse(req.url, true).query;

  // 2. 결과괎으로 유저명과 나이 제공
  // 기존에는 res.end 함수를 사용했는데 express 에서는 res.json 함수 사용
  // 응답을 json타입으로 보여주기도 하고 charset=utf-8을 자동으로 설정해준다.
  res.json(`[user] name : ${user.name}, age : ${user.age}`);
}

// 이전에는 function이 아니라 const로 선언되어 있었다.
// 호이스팅을 사용하기 위해 function으로 변경
// 또한 첫 번쨰 인수로 _ 기호를 넣었는데
// 사용하지 않는 변수는 빼는 것이 원칙이지만 함수 인터페이스 구조상 넣을 수밖에 없을 때의 관레이다.
function feed(_, res) {
  // 3. /feed로 요청오 오면 실행되는 함수
  res.json(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`);
}
