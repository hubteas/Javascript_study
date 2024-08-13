// 8번 : 객체1

const user = {
  name : "김태유",
  age : 20,
  address : "서울시",
  introduce : ()=>{
    console.log("안녕하세요");
  },
};

console.log(user, typeof user);
user.introduce();
console.log(user["address"]);

//.로직접접근할수도 있고, key값의 규칙성이 필요하다면 [""]문법을 사용하여 접근할 수 있다.

// programming 객체 생성
// 프로퍼티 키는 pro1 ~pro4까지
// 프로퍼티 값은 java, dbms, html/css, javascript
// 2. 객체 출력
// 3. javascript만 출력하기(방법2개)

// programming 객체 생성
let programming ={
  pro1 : "java",
  pro2 : "dbms",
  pro3 : "html/css",
  pro4 : "javascript"
}
// 2. 객체 출력
console.log(programming, typeof programming);
// 3. javascript만 출력하기(방법2개)
console.log(programming.pro4);
console.log(programming["pro4"]);

// pro1의 값을 자바로 변경
programming.pro1 = "자바";
console.log(programming.pro1);
console.log(programming);

programming.pro5="git"
console.log(programming);

// const는 재할당이 안되어야 하지만, 객체에서는 재할당이 가능하다.

// programming 객체의 값을 하나씩 출력
for(let i in programming){
  console.log(programming[i]);
}