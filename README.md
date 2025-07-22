# [node 공부]

공부 서적 : Node.js 백엔드 개발자 되기

## cURL 옵션 정리

| 옵션 | 사용 예시                                                               | 설명                                        |
| :--- | :---------------------------------------------------------------------- | :------------------------------------------ |
| `-X` | `-X POST`                                                               | HTTP 메서드 지정 (예: POST, PUT 등)         |
| `-d` | `-d "key1=value1&key2=value2" localhost:3000`                           | POST 통신 시 Body 데이터 전송               |
| `-H` | `-H "Content-Type: application/x-www-form-urlencoded"`                  | 요청 헤더 지정                              |
| `-x` | `curl -x http://proxy_server:proxy_port --proxy-user username:password` | 프록시 서버 설정                            |
| `-T` | `curl -T file.txt http://server.com`                                    | 파일을 서버에 전송                          |
| `-A` | `curl -A "Mozilla/5.0" http://server.com`                               | User-Agent 값 변경                          |
| `-i` | `curl -i https://goldenrabbit.co.kr/`                                   | 서버의 응답 헤더와 Body 출력                |
| `-l` | `curl -l https://goldenrabbit.co.kr/`                                   | 서버 응답에서 헤더만 출력                   |
| `-O` | `curl -O http://server.com/text.txt`                                    | 파일을 이름 변경 없이 다운로드              |
| `-L` | `curl -L http://server.com/redirectingURL`                              | 리다이렉트 URL 따라가기                     |
| `-s` | `curl -s localhost:3000`                                                | 에러가 발생해도 출력하지 않음 (silent 모드) |
| `-S` | `curl -S localhost:3000`                                                | 에러 발생 시 에러 내용 출력 (Show)          |

### 익스프레스에서 미들웨어란 HTTP 요청과 응답 사이에 함수를 추가하여 새로운 기능을 추가하는 것을 뜻한다.

package.json 생성하기

- 해당 폴더로 이동후
  $ npm init -y

## package.json 구성요소

| 항목                   | 설명                                                                                                                                            |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `name:필수`            | `패키지명.214자 글자 수 제한이 있음. 밑줄 또는 점으로 시작할 수 없음. 대문자를 허용하지 않음. URL 안전한 글자만 허용`                           |
| `version:필수`         | `패키지의 버전. 버전 정보는 node-semver로 파싱이 가능해야 한다.`                                                                                |
| `description`          | `패키지 설명 npm serach로 패키지 검색 시 나오는 설명문이다.`                                                                                    |
| `keywords`             | `npm serch로 패키지를 찾을 때 도움을 준다.`                                                                                                     |
| `homepage`             | `프로젝트 홈페이지의 url이다.`                                                                                                                  |
| `bugs`                 | `버그를 제보할 이슈 트래커나 이메일 주소를 적는다.`                                                                                             |
| `license`              | `라이선스 정보를 적는다.`                                                                                                                       |
| `author, contributors` | `저자나 기여자의 정보를 기입한다.`                                                                                                              |
| `files`                | `패키지를 설치할 때 의존성으로 포함할 파일 리스트 하나씩 직접 지정할 수도 있고 '*.*' 같은 패턴으로 넣을 수도 있다.`                             |
| `main`                 | `모듈을 프로그램에서 가져다 사용하는 경우 진입점이 되는 파일 보통 index.js나 main.js를 사용`                                                    |
| `bin`                  | `패키지에 실행 파일이 있는 경우 여기에 지정 npx 명령어를 사용하면 실행`                                                                         |
| `man`                  | `리눅스에 많이 사용하는 man 명령어에서 사용할 수 있는 파일 정보를 기입 man <패키지명>으로 사용`                                                 |
| `repository`           | `코드 저장소 주소를 기입`                                                                                                                       |
| `scripts`              | `npm start, test 등의 npm으로 실행하는 스크립트 정보 설정 유저가 커스텀 가능 npm run <스크립트명>으로 실행`                                     |
| `config`               | `패키지의 스크립트에서 사용할 환경 변수를 설정`                                                                                                 |
| `dependencies`         | `의존성 패키지명과 버전을 맵의 형태로 관리`                                                                                                     |
| `devDependencies`      | `테스트 시 필요한 의존성 패키지명과 버전을 맵의 형태로 관리`                                                                                    |
| `peerDependencies`     | `다른 패키지에서 직접 require로 불러오는 것은 아니지만, 필요한 패키지를 만들어야 하는 경우 사용 주로 플러그인의 호환성 종보를 나타내는 데 사용` |
| `buddledDependencies`  | `패키지를 배포할 때 번틀링되는 패키지 이름 목록`                                                                                                |
| `optionalDependencies` | `사용을 원하는 패키지이지만 없거나 설치가 실패해도 npm 설치가 중단되지 않도록 할 때 사용`                                                       |
| `engines`              | `동작 가능한 node 버전을 지정`                                                                                                                  |
| `os`                   | `어떤 운영체제에서 동작하는지 지정`                                                                                                             |
| `private`              | `true로 설정 시 pulish명령을 거부`                                                                                                              |
