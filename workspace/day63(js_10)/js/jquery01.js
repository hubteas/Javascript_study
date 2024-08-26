let $box2 = $(`.box2`);
console.log($box2);

console.log($box2.parent());//부모요소인 main요소가 선택됨
console.log($box2.parents());//조상요소인 main body html 요소 선택됨
console.log($box2.prev());//형 요소인 box1이 선택됨
console.log($box2.nextAll());//동생 요소인 box3, box4가 선택됨
console.log($box2.nextAll()[1]);//인덱스번호로 box4가 선택됨

// 클래스 이름으로 가져온 모슨 요소 중 2번째 요소 선택
console.log($('.div-box').eq(2));
console.log($('.div-box'));