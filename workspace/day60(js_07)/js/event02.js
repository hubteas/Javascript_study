let boxClick = document.querySelector("#click");
let boxOver = document.querySelector("#over");
let boxOut = document.querySelector("#out");
let boxOverOut = document.querySelector("#over-out");

function changeBgGreen(){
  // boxClick.setAttribute('style', "background-color:green");
  // console.log(this);
  this.setAttribute('style', "background-color:green");
}

boxClick.addEventListener("click", changeBgGreen);

boxOver.addEventListener("mouseover", function(){
  boxOver.setAttribute("style", 'background-color:pink');
});

function changeBgBlue(){
  //this는 현재 이벤트가 걸린 자기자신을 의미한다
  this.setAttribute("style", "background-color:blue");
  console.log(this);
}

boxOut.addEventListener("mouseout", changeBgBlue);

boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgBlue);