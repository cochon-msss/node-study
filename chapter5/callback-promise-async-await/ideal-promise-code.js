/**
 * 자바스크립트에서 비동기 처리를 하는 데 사용하는 Promise 객체는 콜백보다는 확실히 편리합니다.
 * 다만 .then()과 .cathc() 함수를 연결하는 체이닝 방식을 사용하기가 만만하지는 않습니다.
 * 거기에 더 복잡한 로직을 추가하고 예외 처리까지 해야 되는 상황이면 더욱힘들어진다.
 *
 * 이런 깔끕한 Promise 코드는 실전에서는 거의 없습니다. 실전에서는 더욱 복잡하고
 * 더욱 까다로운 로직을 수행해야 하는 경우가 많으므로 로직이 복잡해진다.
 */

function goodPromise(val) {
  // 1. promise를 생성 후 반환
  return new Promise((resolve, reject) => {
    resolve(val);
  });
}

goodPromise("세상에")
  // 2. Promise에서 resolve 이후에는 then 호출 가능
  .then((val) => {
    return val + " 이런";
  })
  .then((val) => {
    return val + " 코드는";
  })
  .then((val) => {
    return val + " 없습니다.";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    // 3. Promise에서 reject가 호출되었을 경우 실행
    console.log(err);
  });
