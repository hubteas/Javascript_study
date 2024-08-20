const input = document.querySelector("input[type='button']");
const p = document.querySelector("p");

input.addEventListener("click", function(){
  with(p.style){
    // javascript 에서 객체의 프로퍼티를 더 간단하게 접근할 수 있게 해주는 구문으로
    // 특정 객체를 지정하여 그 객체의 프로퍼티를 코드블록 안에서 직접 참조할 수 있다.
    // p.style.fontSize 등으로 하나하나 할 필요없이 하나의 객체로 만들어서 한번에 쉽게 지정
    fontSize = "30px";
    border = "2px dashed blue";
    width = "100px";
    backgroundColor = "skyblue";
  }
})