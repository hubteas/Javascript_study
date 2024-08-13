//7번 : global

globalThis.num;
let num1 = 10;
let num2 = 20;

function changeNumber(num1, num2){
  globalThis.num = num1;
  console.log(globalThis.num);
  num1 = num2;
  num2 = globalThis.num;
  console.log(num1, num2);
}

changeNumber(num1, num2);

//globalThis 객체를 사용해서 전역변수를 설정하고 함수 내부에서 변수 값을 변경
//globalThis는 자바스크립트 환경에 따라 전역 객체에 접근하는 방밥이 달라 코드의 이식성이
// 떨어지는 것을 극복하기 위해 도입된 표준화된 방법(ES11에서 도입된 표준 객체)

//let : 블록스코프

globalThis.str = "Hello";
console.log(globalThis.str);

function data(){
  // globalThis.strData = "값 변경";
  let number = "숫자";
}

console.log(data());
// console.log(globalThis.strData);
console.log(number);