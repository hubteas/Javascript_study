// 2번 : 배열 메소드

let numbers = [10,5,3,2,7,9];
console.log(numbers, typeof numbers);

// .push() : 가장 마지막에 추가
numbers.push(100);
numbers.push(999);

console.log(numbers, typeof numbers);
console.log(numbers[0], typeof numbers[0]);

for(let i of numbers){
  console.log(i);
}

// .join() : 전달한 값으로 구분한 뒤 문자열로 리턴
console.log([1,2,3,4,5]);
console.log([1,2,3,4,5].join(" "), typeof [1,2,3,4,5].join(" "));

// .slice(시작, 끝) : 원하는 부분을 추출하기 위해서 시작인덱스와 마지막인덱스를 전달한다
// 마지막인덱스는 포함되지않는다

let number2 = [1,2,3,4,5,6,7,8];
console.log(number2, typeof number2);
console.log(number2[0]); // 인덱싱
console.log(number2.slice(0, 3));// 슬라이싱 : 여러개 값 추출
console.log(number2.slice(0, 7));
console.log(number2.slice[(2, 5)]); //undefined 
//slice[(2, 5)] => number2[5] 처럼 접근하는 것으로 해석되는데 함수가 배열로 접근되어 undefined로 결과출력
// Array<number>.slice(start?: number, end?: number): number[]
// 배열의 일부를 복사한 새로운 배열을 반환하는 메소드, 원본 배열은 변경되지 않는다

console.log(number2.slice([2, 5])); //[1, 2, 3, 4, 5, 6, 7, 8]
//slice는 두개의 정수를 매개변수로 받는다
//[2, 5] 첫번째 매개변수로 처리되고 두번째 매개변수는 undefined로 처리된다
//number2.slice(0)
console.log(number2.slice(0));

//.pop() : 마지막요소를 삭제
// .shift() : 첫번째 요소를 삭제
//.splice(인덱스번호, 개수) : 인덱스 번호 삭제(무조건2개 매개변수로 작성!!)
//.splice(개수) : 매개변수를 1개만 전달하면 0번째 인덱스로부터의 개수로 인식하여 삭제된다.


console.log('------------------------');
// console.log(number2);
// console.log(number2.pop()); // 삭제되는 값을 반환
// console.log(number2);
// console.log(number2.shift());// 삭제되는 값을 반환
// console.log(number2);
// console.log(number2.splice(2,1));
// console.log(number2);
// console.log(number2.splice(2));
// console.log(number2);

// console.log(number2);
// //.splice(인덱스, 개수, ...args) : 교체
// console.log(number2.splice(1,1,0)); // [2]교체전 값 반환
// console.log(number2);


// //.indexOf(값) : 값을 array(기존배열)에서 찾은 뒤 인덱스 번호를 반환
// //값을 못찾으면 -1을 반환
// console.log(number2.indexOf(10));
// console.log(number2.indexOf(0));

// //.fill(값) : 배열의 모든 요소를 해당 값으로 채우기
// const number3 = new Array(5).fill(10);
// console.log(number3);

// //.fill(값, 시작인덱스, 종료인덱스) : 시작인덱스 ~ 종료인덱스 -1까지 해당 값으로 채운다
// const number4 = new Array(10).fill(7, 2, 5);
// console.log(number4); //[ <2 empty items>, 7, 7, 7, <5 empty items> ]

//반복문 : forEach(callback)
number2.forEach(function (element, index, array){
  // console.log(element); // 값출력
  // console.log(index); //인덱스 출력
  console.log(array); //원본배열 출력(8번)
});