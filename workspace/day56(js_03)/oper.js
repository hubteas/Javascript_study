//1) 관계연산자
// ==, != : 값만 비교, 문자열일 경우 자동으로 파싱
// ===, !== : 값과 타입 비교

// let data1 = "1";
// let data2 = 1;
// console.log(data1, typeof data1);
// console.log(data2, typeof data2);

// console.log(data1 == data2); //true (값만 비교)
// console.log(data1 === data2); //false (값과 타입 비교)

// //false 로 취급되는 값
// //'', "", ``, 0, 0.0, null, undefined

// let data;
// if(data){
//   console.log("true값");
// }else{
//   console.log("false값");
//   console.log(typeof data); //undefined
// }

//2) 논리연산자(&&, ||, !)
let data;
// data = data || 1;
// console.log(undefined || 1); 
// console.log(1 || undefined);
// console.log(Boolean(1), typeof Boolean(1));
// console.log(Boolean(undefined), typeof Boolean(undefined));

//&& : 선행조건식이 false면 뒤로 넘어가지 않고 선행조건식이 true이면 뒤에 있는 값으로 대체된다
// console.log(undefined && 1);
// console.log(1 && undefined);
// console.log(false && 10);
// console.log(10 && false);

// //논리부정연산자 : !
// console.log(!true);
// console.log(!false);
// console.log(!null);
// console.log(!undefined);

// 병합연산자 ??
//왼쪽 값이 null또는 undefined 인 경우에만 오른쪽 값을 반환한다
let user = null;
let value = "default value";

console.log(user, typeof user, Boolean(user), typeof Boolean(user));

console.log(null ?? value);
console.log(undefined ?? value);
console.log(false ?? value);
console.log(10>3 ?? value);

//옵셔널 체이닝(?.)
let users = {
  profile : {
    name : undefined,
    age : 5
  }
};

console.log(users);
let userName = users?.profile?.name;
console.log(userName);

console.log(users.profile.name);


let userCountry = users?.profile?.address?.country;
console.log(userCountry); //undefined

// console.log(users.profile.address.country);
//users.profile.address.country가 정의되지 않아서 오류발생
//?.를 사용하지 않고 안전하게 프로퍼티에 접근하기 위해 기존에는 &&를 사용했음.
console.log(users && users.profile && users.profile.address && users.profile.address.country);


console.log(user); //null
console.log(value); //default value

console.log(user?.profile?.name); //undefined
let data1 = user?.profile?.name ?? value;
console.log(data1);


//NaN
console.log(NaN, typeof NaN, null, typeof null);

// 삼항연산자
// 조건식 ? true 일 때의 값 : false일때의 값
let age = 20;
let isAdult = age >= 19 ? "성인" : "미성년자";
console.log(isAdult);

