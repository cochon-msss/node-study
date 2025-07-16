# [node 공부]


공부 서적 : Node.js 백엔드 개발자 되기

## cURL 옵션 정리

| 옵션 | 사용 예시 | 설명 |
| :--- | :--- | :--- |
| `-X` | `-X POST` | HTTP 메서드 지정 (예: POST, PUT 등) |
| `-d` | `-d "key1=value1&key2=value2" localhost:3000` | POST 통신 시 Body 데이터 전송 |
| `-H` | `-H "Content-Type: application/x-www-form-urlencoded"` | 요청 헤더 지정 |
| `-x` | `curl -x http://proxy_server:proxy_port --proxy-user username:password` | 프록시 서버 설정 |
| `-T` | `curl -T file.txt http://server.com` | 파일을 서버에 전송 |
| `-A` | `curl -A "Mozilla/5.0" http://server.com` | User-Agent 값 변경 |
| `-i` | `curl -i https://goldenrabbit.co.kr/` | 서버의 응답 헤더와 Body 출력 |
| `-l` | `curl -l https://goldenrabbit.co.kr/` | 서버 응답에서 헤더만 출력 |
| `-O` | `curl -O http://server.com/text.txt` | 파일을 이름 변경 없이 다운로드 |
| `-L` | `curl -L http://server.com/redirectingURL` | 리다이렉트 URL 따라가기 |
| `-s` | `curl -s localhost:3000` | 에러가 발생해도 출력하지 않음 (silent 모드) |
| `-S` | `curl -S localhost:3000` | 에러 발생 시 에러 내용 출력 (Show) |



### 익스프레스에서 미들웨어란 HTTP 요청과 응답 사이에 함수를 추가하여 새로운 기능을 추가하는 것을 뜻한다.
