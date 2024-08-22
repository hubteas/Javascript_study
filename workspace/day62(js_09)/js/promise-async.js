// 7번

const DB = [];

function saveDB(user){
  //setTimeout(callback, daley);
  setTimeout(() =>{
    const beforLength = DB.length;
    const afterLength = DB.push(user);
    
    return new Promise((resolve, reject) => {
      if(beforLength < afterLength){
        resolve(user);
        console.log(`${user.name}의 정보가 저장되었습니다`);
      }else{
        reject(new Error("저장되지 않았습니다"));
      }
      }, 3000);
  });
}

// ver.2 undefined 안나오게
// function saveDB(user){
//   //setTimeout(callback, daley);
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       const beforLength = DB.length;
//       const afterLength = DB.push(user);

//       if(beforLength < afterLength){
//         resolve(user);
//         console.log(`${user.name}의 정보가 저장되었습니다`);
//       }else{
//         reject(new Error("저장되지 않았습니다"));
//       }
//     });
//   }, 3000);
// }



//사용자 정보를 받아서 이메일 전송 메시지 출력
function sendEmail(user){
  //사용자 정보를 Promise를 이행하고 사용자 정보를 resolve 함수에 전달
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
      console.log(`이메일 ${user.email}전송`);
    },5000);
  });
}

// 사용자 정보를 받아서 사용자 이름을 포함한 정보 반환
function getResult(user){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`방문자 ${user.name}`);
    }, 500);
  });
}

function register(user){
  //Promise.all 메소드를 사용하여 여러 Promise를 동시에 실행하고 그 결과를 담은 Promise 객체 생성
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user),
  ]);

  resultAsync.then(console.log);
}


register({
  name :"짱구",
  email : "gu123@gmail.com",
});