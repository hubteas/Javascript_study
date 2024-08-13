// 4번 : 즉시 실행 함수
// 한번만 사용되는 함수로 정의와 동시에 실행된다
// 재사용되지 않기 때문에 보통 익명함수로 작성된다.

(function(){
  console.log("javascript 4일차 수업");
})();

let result = (function(num1, num2){
  return num1 + num2;
})(10,20);

console.log(result);