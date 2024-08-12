//일반함수 정의(매개변수o, 리턴값x)

function showNumber(num){
  console.log(`showNumber 함수실행`);
  console.log(`num : ${num}`);
  return num;
}

//함수 호출
showNumber(10);

//함수를 매개변수로 넘겨줄 수 있다
function decrease(number){
  return number - 1;
}

//함수 호출
console.log("================");
console.log(decrease(showNumber(10)));