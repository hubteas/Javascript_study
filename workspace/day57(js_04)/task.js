//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력

//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용

// function reverseStr(str, callback) {
//   // 문자열을 배열로 변환 -> 배열의 순서를 반전 -> 다시 문자열로 변환
//   const reversed = str.split('').reverse().join('');
//   // 콜백 함수 호출
//   if(callback){
//     callback(reversed);
//   }
// }

function reverseStr(str, callback){
  function cal(str){
    if(str === "" || str.length === 1){
      return str;
    }
    return cal(str.substr(1)) + str[0];
  }
  if(callback){
    callback(cal(str));
  }
}

// 출력기능 콜백 함수
function printStr(str) {
  console.log("거꾸로 된 문자열:", str);
}

// 호출
reverseStr("Hello", printStr);




//2. 성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기


// 풀네임을 만드는 함수
function createFullName(firstName, lastName, callback) {
  const fullName = `${lastName} ${firstName}`;
  // 콜백 함수 호출
  callback(fullName);
}

// 출력기능 콜백함수
function user(fullName) {
  console.log(`${fullName}님 환영합니다!`);
}

// 호출
createFullName("태유", "김", user);

//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환

function ifAdult(age, callback){
  const check = age>=18?true:false;
  if(callback){
    callback(check);
  }
}

function inputAge(age){
  console.log(`18세가 넘습니까?: ${age}`);
}

ifAdult(10, inputAge);


//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90

// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다
let school={
  stu1 : {name : '둘리',
            age : 5,
            score : 80 
          },
  stu2 : {name : '도우너',
            age : 6,
            score : 50 
          },
  stu3 : {name : '또치',
            age : 5,
            score : 90 
          },
}
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)

for(let i in school){
  console.log(school[i].name, school[i].score);
}
//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라

function stu_score(school){
  let sum = 0;

  for(let i in school){
    sum = sum + school[i].score;
  } 
  return sum;
}

console.log(stu_score(school));