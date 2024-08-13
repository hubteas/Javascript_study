// 2번 : 익명함수

let square = function(x){
  return x * x;
};

console.log(square(10));

let greet = function(name){
  return `안녕하세요 ${name}님`;
};

console.log(greet('김태유'));

setTimeout(function (){
  console.log("2초후출력")
}, 2000);