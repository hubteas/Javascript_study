let $boxes = $('.div-box');
console.log($boxes);
console.log($boxes[2]);
// jquery 객체에서 인덱스를 사용해서 접근한 요소는 일반적인 DOM요소로 반환된다
// DOM요소로 반환되기때문에 jQuery 메소드를 사용할수 없게된다
// 따라서 jquery객체가 아닌 순수 DOM객체이다
let element = $boxes[1];
element.style.backgroundColor  = 'red';

console.log($boxes.eq(2));
$boxes.eq(2).css('background-color', "blue");
// .eq메소드를 사용하여 jquery 객체에서 특정 인덱스에 있는 요소를 선택하여 새로운 jQuery 객체로 반환된다

// jQuery 이용해서 사용할것
//1. li 태그 전체 가져오기
console.log('1번 :li 태그 전체 가져오기')
let $li = $('li');
console.log($li);
//2. 클래스 이름이 product인 태그 전체 가져오기
console.log('2번:클래스 이름이 product인 태그 전체 가져오기')
let $product = $('.product')
console.log($product);
//3. 자식 태그 중 첫번재 자식 가져오기
// 없는 값을 출력하려고하면 length 가 0으로 출력된다
console.log('3번:자식 태그 중 첫번재 자식 가져오기')
$product.children().first();
console.log($product.children().first());
//4. ul 태그의 부모태그 가져오기
console.log('4번:ul 태그의 부모태그 가져오기')
let $ul = $('ul')
$ul.parent();
console.log($ul.parent());
//5. li 태그의 부모태그 가져오기
console.log('5번:li 태그의 부모태그 가져오기')
$li.parent();
console.log($li.parent());
//6. ul 태그 자식 중에서 0번째 인덱스 가져오기
console.log('6번:ul 태그 자식 중에서 0번째 인덱스 가져오기')
$ul.children().eq(0);
console.log($ul.children().eq(0));
//7. ul 태그 자식 중에서 2번째 인덱스 가져오기
console.log('7번:ul 태그 자식 중에서 2번째 인덱스 가져오기')
$ul.children().eq(2);
console.log($ul.children().eq(2));

