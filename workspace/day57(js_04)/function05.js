// 5번 : 화살표함수

const add = (num1, num2) => num1 + num2;
console.log(add(2,3));

// 이름과 나이를 매개변수에 저장하여 출력하는 화살표함수
// 함수명 printInfo

let printInfo = (name, age) => console.log(`제이름은 ${name} 입니다`, `제나이는 ${age}세 입니다`);
printInfo("김태유", 100);

// 두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기(화살표 함수 이용)

function multy(num1, num2, callback){
  const result = num1 * num2;
  if(callback){
    callback(result);
  }
  return result;
}

let multi = (result) => console.log(result * 3);
multy(10,10,multi);
multy(20,20, (result) => console.log(result * 3));//한번에쓰면 이렇게도 가능