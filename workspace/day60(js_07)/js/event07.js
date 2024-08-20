// window.onload = ()=>{
//   alert("로드이벤트발생!!");
// }

window.addEventListener("load", ()=>{
  alert("로드!");
})

let main = document.querySelector("main");
let color = main.style.backgroundColor;

window.addEventListener("scroll", ()=>{
  // scrollY 프로퍼티는 현재 Y축에 위치를 가지고 있다
  let scrollY = window.scrollY;
  console.log(scrollY);

  if(scrollY>400){
    main.style.backgroundColor="gold";

  }else if(scrollY>200){
    main.style.backgroundColor="skyblue";
  }else if(scrollY>100){
    main.style.backgroundColor="green";
  }else{
    main.style.backgroundColor=color;
  }
})