// 6번 : 재귀함수

//팩토리얼 : n! => 3! => 3 * 2 * 1
function factorial(n){
  //재귀함수 종료 조건
  if(n === 0){
    return 1;
  }
  //재귀호출 :  n * (n - 1)의 팩토리얼
  return n * factorial(n-1);
}

console.log(factorial(3));
console.log(factorial(5)); //5! =  5 * 4 * 3 * 2 * 1

//재귀함수를 이용해서 문자열 뒤집기
//hello => olleh 출력

function reverseStr(str){
  //종료조건
  if(str === "" || str.length === 1){
    return str;
  }

  //substr(1) 사용 : 첫번째 문자열 제거하고 나머지 문자열 반환하는 메소드
  //slice(1)
  return reverseStr(str.substr(1)) + str[0];
}

console.log(reverseStr("hello")); //olleh
