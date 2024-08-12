//2번 : 함수1-일반함수

// 매개변수 o, 리턴값 o 함수 정의
function getAdd(num1, num2 = 10){
  console.log(num1, typeof num1);
  console.log(num2, typeof num2);
  return num1 + num2;
}

// 매개변수 o, 리턴값 o 함수호출 => 출력(함수명(인수1, 인수2)) or 변수명 = 함수명(인수1, 인수2)
let result1 = getAdd(1, 2);
console.log(result1);

let result2 = getAdd();
console.log(result2);

let result3 = getAdd(100, 200);
console.log(result3);

//디폴트 매개변수(파라미터) : 값이 전달되지 않을 경우 초기값을 설정할 수 있다

//함수명 : introduce 매개변수o, 리턴값x
//아이디, 비밀번호, 이름을 전달받고 이름의 기본값을 사용자로 설정하기
function introduce(id, pw, name='사용자'){
  console.log(id);
  console.log(pw);
  console.log(name);
}

//함수 호출1(인수1, 인수2)
introduce('abc123', 'qwer1234');

//함수 호출2(인수1, 인수2, 본인이름)
introduce('aaa123', 1234, '김영선');
//01234로 인수를 전달하면 8진수로 해석되어 534가 된다 8진수는 0부터 7까지의 숫자만 포함된다
//10진수로 인식시키기 위해 0을 제거하거나 문자열로 전달한다

// 가변매개변수(가변파라미터) : 함수 호출 시 몇개의 값이 전달될지 모를 때 사용한다
function printAdd(...numbers){
  console.log(numbers, typeof numbers);

  // for(let i = 0; i < numbers.length; i++){
  //   console.log(numbers[i], typeof numbers[i]);
  // }

  //for(let 변수명 in 배열명){} ==> 자바스크립트
  //forEach(자료형 변수명:배열명){} ==> 자바
  for(let i in numbers){
    console.log(numbers[i], typeof(numbers[i]));
  }
}

printAdd(1, 2, 3, 'a'); //[ 1, 2, 3, 'a' ] object

//동적바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정된다
printAdd('a', true, "안녕", 5);

//객체 사용
function info(person){
  console.log(person);
  console.log(person.name);
  console.log(person.age);
}

let person1 = {name:"김영선", age:20};
info(person1);