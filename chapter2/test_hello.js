import http from "k6/http";

export const options = {
  // 1. 테스트 옵션
  // 유저 100 명이 10초 동안 계속 요청을 보내는 설정
  vus: 500, // vus는 가상 유저를 설정하는 항목
  duration: "10s", // duration은 몇 초 동안 테스트를 진행할지 선택하는 옵션
};

export default function () {
  http.get("http://localhost:8000"); // 테스트에 사용할 함수 지정
  // http 프로토콜의 GET 메서드를 사용해서 요청을 보낸다.
}
