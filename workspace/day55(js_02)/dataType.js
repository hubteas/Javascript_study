//7번 : 데이터 타입

// //number
// console.log(3.14, typeof 3.14, typeof(3.14));
// console.log(5, typeof 5, typeof(5));
// console.log(Infinity, typeof Infinity); //양의 무한대
// console.log(-Infinity, typeof -Infinity);//음의 무한대
// console.log(NaN, typeof NaN);

// //number타입으로 형변환
// let str1 =  "123";
// let str2 = "abc";
// let num1 = Number(str1); //문자열을 숫자로 변환
// let num2 = Number(str2); //문자열을 숫자로 변환
// console.log(str1, typeof str1, num1, typeof num1);
// console.log(str2, typeof str2, num2, typeof num2);

// //String
// console.log("hello", typeof "hello");
// console.log('hello', typeof 'hello');
// console.log(`hello`, typeof `hello`);

// let numStr = String(num1);
// console.log(numStr, typeof numStr);

// //Boolean : true, false의 값
// console.log(true, typeof true);
// console.log(false, typeof false);
console.log(Boolean(" "), typeof Boolean(" ")); //true
console.log(Boolean(""), typeof Boolean("")); //false

console.log(Boolean(undefined));

//Falsy : 자바스크립트에서 논리적으로 거짓으로 평가되는 값
  // false, 0(숫자0), -0(음수0), 0n(BigInt형식의 0), ""(빈문자열), null, undefined, NaN
//Truthy : 자바스크립트에서 논리적으로 참으로 평가되는 값

//true와 false : boolean 타입의 명확한 값으로 참과 거짓을 나타낸다
//Falsy와 Truthy : 특정값들이 논리적 평가(조건문 등)에서 어떻게 처리되는 지를 설명하는 개념으로
//Falsy는 false처럼 동작하고 Truthy는 true처럼 동작하는 값들이다

// undefined
console.log(undefined, typeof undefined);
console.log(Boolean(undefined), typeof Boolean(undefined));
// null
console.log(null, typeof null);
console.log(Boolean(null), Boolean(null));

// Symbol
console.log(Symbol(), typeof Symbol()); //Symbol() symbol
console.log(Symbol("description"), typeof Symbol("description")); //Symbol(description) symbol
//심볼은 고유함을 보장하며 객체의 키로 심볼 사용가능하다
let sym1 = Symbol("id");
let sym2 = Symbol("id");
// == : 값만 같음(타입은 무시)
// === : 값과 타입이 같음
console.log(sym1 == sym2); //false
console.log(sym1 === sym2); //false

console.log(1 == "1"); //true
console.log(1 === "1"); //false

// Object
//객체 : 키-값 쌍의 집합
let person = { name : "김영선", age : 20, isStudent : false};
console.log(person, typeof person);

//배열
let arr = [1, 2, 3];
console.log(arr, typeof arr);

//함수
function printNum(){
  console.log(1, typeof 1);
}

console.log(printNum, typeof printNum);
//function이 반환되지만 이는 특별한 객체로 취급된다
