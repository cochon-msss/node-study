const express = require("express");
const app = express();
let posts = []; // 1. 게시글 리스트로 사용할 posts에 빈 리스트 할당

// req,body를 사용하려면 JSON 미들웨어를 사용해야 한다.
// 사용하지 않으면 undefined를 반환
app.use(express.json()); // 2. json 미들웨어 활성화

// post 요청 시 컴텐트 타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true })); // 3. json 미들웨어와 함께 사용

app.get("/", (req, res) => {
  // 4. / 쵸엉이 오면 실행
  res.json(posts); // 5. 게시글 리스트를 json 형식으로 보여줌
});

app.post("/posts", (req, res) => {
  // 6. /posts로 요청이 오면 실행
  const { title, name, text } = req.body; // 7. http 요청의 body 데이터를 변수에 할당
  console.log(title);
  // 8. 게시글 리스트에 새로운 게시글 정보 추가
  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id; // 9. app.delete에 설정한 path 정보에서 id값을 가져옴
  const filteredPosts = posts.filter((post) => post.id !== +id); // 10. 글 삭제 로직
  const isLengthChanged = posts.length !== filteredPosts.length; // 11. 삭제 확인
  posts = filteredPosts;
  if (isLengthChanged) {
    res.json("OK");
    return;
  }
  res.json("NOT CHANGED"); // 13. 변경되지 않음
});

app.listen(3000, () => {
  console.log("welcome posts START");
});
