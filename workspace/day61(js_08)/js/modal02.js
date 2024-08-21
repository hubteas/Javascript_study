let navLogin = document.querySelector(".nav--login");
let modalBox = document.querySelector(".modal-box");
let xBox = document.querySelector(".x-box");


navLogin.addEventListener("click", function(){
  modalBox.style.display = "flex";
});

xBox.addEventListener("click", function(){
  modalBox.style.display = "none";
});

xBox.addEventListener("mouseover", function(){
  this.style.color = 'red';
})

xBox.addEventListener("mouseout", function(){
  this.style.color = 'black';
})

