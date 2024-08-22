// 6번

// DB 빈 배열 생성
const DB = [];

// 사용자 정보를 받아서 저장하는 함수

function saveDB(user){
  // DB배열길이(사용자추가전)
  const beforeLength = DB.length;
  console.log(beforeLength);
  // 사용자를 DB에 추가하고 배열길이를 반환
  const afterLength = DB.push(user);
  console.log(`저장 ${user.name}`); 


  // promise 객체를 생성해서 반환
  // DB에 사용자 정보를 추가하는 작업이 성공이면 resolve 호출
  // 실패하면 reject 호출

  return new Promise((resolve, reject)=>{
    if(beforeLength < afterLength){
      // 사용자가 성공적으로 추가되면 resolve 호출, user객체를 전달
      resolve(user);
    }else{
      // 실패하면 reject 호출
      reject(new Error("저장되지 않았습니다"));
    }
  })
}

// 사용자 정보 받아서 이메일 전송 메세지 출력
function sendEmail(user){
  console.log(`이메일 ${user.email}전송`);
  // 사용자 정보를 promise이행하고 사용자 정보를 resolve함수에 전달
  return new Promise((resolve)=>{
    resolve(user);
  });
}

// 사용자 정보를 받아서 사용자 이름을 포함한 정보 반환
function getResult(user){
  return new Promise((resolve)=>{
    resolve(`방문자 ${user.name}`);
  });
}

function register(user){
  // Promise.all 메소드를 사용하여 여러 Promise를 동시에 실행하고
  // 그 결과를 담은 Promise 객체 생성
  const resultAsync = Promise.all([
    saveDB(user), // 사용자 정보를 DB에 저장
    sendEmail(user), // 사용자에게 이메일 전송
    getResult(user), // 사용자 정보를 기반으로 결과 생성
  ]);

  // resultAsync Promise 객체가 이행될때 실행(console.log)
  resultAsync.then(console.log)
}

// 사용자 등록함수 호출
register({
  name : "김태유",
  email : "tykim88@gmail.com"
});
