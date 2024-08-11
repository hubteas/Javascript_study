//8번 : 형변환(명시적 형변환과 암시적 형변환)

//1. 숫자로 변환
//1) 문자열을 숫자로
console.log(Number("123")); // 123
console.log(Number("123.45")); //123.45
console.log(Number("")); //0
console.log(Number("  ")); //0
console.log(Number("abc")); //NaN

//2) 불리언을 숫자로
console.log(Number(true)); //1
console.log(Number(false)); //0

//3) undefined, null
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0

//2. 문자열 변환
//3. 논리형 변환

//암시적형변환(묵시적형변환)
//1) 숫자와 문자열 더하기 연산
console.log(1 + "2", typeof (1 + "2")); //12, string
console.log("3" + 4 + 5); //345
console.log(1+2+"3"); //숫자끼리 먼저 더해진 후 문자열 연결된다 결과 33

//2) 산술 연산
console.log("5" - 3); //2 문자열 5가 숫자 5로 변환되어 산술 연산
console.log("3px"-1); //NaN
console.log("5" * "2"); // 10

//3) 불리언과 숫자의 연산
console.log(true + 1); //true가 숫자 1로 변환되어 2
console.log(10 + false); //10

console.log(10 + NaN); //NaN
