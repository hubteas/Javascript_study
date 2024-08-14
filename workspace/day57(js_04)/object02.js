// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다
// 단, 반드시 대문자로 시작해야 한다

function User(id, pw, name, age, subject = "javascrip"){
  this.id = id;
  this.pw = pw;
  this.name = name;
  this.age = age;
  this.subject = subject;
}

user1 = new User("abc", "1234", "짱구", 5);
user2 = new User("abcd", "12345", "철수", 5);
console.log(user1);
console.log(user2);