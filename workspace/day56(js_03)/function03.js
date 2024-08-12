//4번 : 함수2-익명함수
//이름이 없는 함수이며 변수에 저장한다

let printAll = function (num){
  console.log(num);
};

printAll(100);
//매개변수로 전달한 값이 짝수라면 +10한 값을 출력
//아니라면 전달된 값만 출력 
//result 변수, 익명함수 이용

//1) let 변수 = function (num) 익명함수 정의, 매개변수1개
//2) 조건문(if~else문)


let result = function (num){
  if(typeof num ==='number' && num % 2 === 0){  
    //매개변수로 받은 값이 숫자타입이 아닌경우를 체크해야한다
    console.log(num + 10);
  }else{
    console.log(num);
  }
}

result(10); //20출력
result('10'); //1010출력
//% 연산 number로 변환
//문자열 10이 매개변수 num으로 전달 -> javascript에서는 %연산을 사용할 때
//문자열 10이 자동으로 숫자 10으로 변환된다
// -> '10' % 2 === 0 true로 평가  => num + 10인 경우 문자열+숫자 연결된다

//콜백함수 : 함수의 매개변수로 전달되는 함수를 의미한다

function resultNum(num, callback){
  for(let i = 0; i < num; i++){
    callback(i);
  }
}

resultNum(10, result);
// resultNum(5, function (n){  //익명함수를 직접 인수에 전달할 수 있다(콜백함수)
//   console.log(n*2);
// });
