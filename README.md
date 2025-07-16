# [node 공부]


공부 서적 : Node.js 백엔드 개발자 되기

curl 옵션
옵션 | 사용예시                                            |설명
-X   -X POST                                            HTTP 메서드 정보
-d   -d "key1=value1&key2=value2" localhost:3000        POST 통신 시 body 데이터
-H   Content-Type: application/x-www-form-urlencoded    헤더 정보
-x   curl -x http://proxy_server:proxy_port -proxy-user
     username:password                                  프록시 서버 설정
-T   curl -T file.text http://server.com                파일을 서버에 전송 시 사용
-A   curl -A "Mozilla/5.0" http://server.com            유저 에이전트(user agent)를 변경
-i   curl -i https://goldenrabbit.co.kr/                서버의 응답을 결과로 출력
-l   curl -l https://goldenrabbit.co.kr/                서버 응답에서 헤더 값만 출력
-O   curl -O http://server.com/text.txt                 서버의 파일을 이름 변경 없이 내려받기
-L   curl -L http://server.com/redirectingURL           리다이렉트 URL 따라가기
-s   curl -s localhost:3000                             에러가 발생해도 출력하지 않음(silent)
-S   curl -S localhost:3000                             에러 발생 시 에러 출력(Show)

#익스프레스에서 미들웨어란 HTTP 요청과 응답 사이에 함수를 추가하여 새로운 기능을 추가하는 것을 뜻한다.
