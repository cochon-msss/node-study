const DB = [];

// promise 객체가 생성되면 대기 상태가 된다
// resolve() 함수가 실행되면 이행으로 변경되고
// 실패해 reject() 함수가 실행되면 거절로 변경된다

function saveDB(user) {
  const oldDBSize = DB.length + 1;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user); // 성공 시 유저 정보 반환
    } else {
      reject(new Error("Save DB Error!")); // 1. 실패 시 에러 발생
    }
  });
}

function sendEamil(user) {
  console.log(`email to ${user.name}`);
  return new Promise((resolve) => {
    // Promise 객체를 반환. 실패 처리 없음
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    // promise 객체 반환
    resolve(`success regist ${user.name}`); // 성공 시 성공 메시지와 유저명 반환
  });
}

function registerByPromise(user) {
  // 2. 비동기 호출이지만, 순서를 지켜서 실행
  const result = saveDB(user)
    .then(sendEamil)
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => console.log("완료!"));
  // 3. 아직 완료되지 않았으므로 지연(pending)상태
  console.log(result);
  return result;
}

const myUser = { email: "andy@test.com", password: "1234", name: "andy" };
const result = registerByPromise(myUser);
// 결괏값이 promise이므로 then() 메서드에 함수를 넣어서 결괏값을 볼 수 있음
result.then(console.log);
