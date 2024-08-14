// 1번 : 배열

// 배열 리터럴 대괄호 사용 배열 생성

let arr = [];
console.log(arr, typeof arr);

// 배열 내부에 값 삽입(배열 내부 데이터 타입이 달라도 배열 생성 가능)

arr[0]=10;
arr[1]='가나다';
arr[2]= 1.4;
console.log(arr, typeof arr);

// 초기값 할당
let arr2=[1,2,3];
console.log(arr2, typeof arr2);
console.log(`배열길이 : ${arr2.length}`);

// 배열 크기 지정한 배열 생성
let arr3 = [,,,];
console.log(arr3, arr3.length);

// Array() 생성자 함수로 배열 생성
let arr4 = new Array();
console.log(arr4, typeof arr4);

arr4[0]='사과';
arr4[1]='체리';
arr4[2]='복숭아';

console.log(arr4, typeof arr4);

// Array() 생성자 함수로 초기값 할당
let arr5 = new Array('0번째 인덱스', 1, true);
console.log(arr5, typeof arr5);

// Array() 생성자 함수로 칸수 지정
let arr6 = new Array(4);
console.log(arr6, typeof arr6);

console.log(arr5, typeof arr5);
for(let i = 0; i< arr5.length; i++){
  console.log(arr5[i]);
}

//배열 순회시 사용할 수 있는 반복문
// for ... in, for ... of
let arr7 = ['a', 'b', 'c'];

for(let i in arr7){
  // console.log(i); //인덱스
  console.log(arr7[i]);
}

for(let value of arr7){
  console.log(value);
}