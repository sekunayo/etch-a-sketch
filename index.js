let container = document.getElementById("container");
let large = 16;
let medium = 32;
let small = 64;
let sizeOfBox = document.getElementById("sizes");
let smallElement = document.getElementById("small");
let mediumElement = document.getElementById("medium");
let largeElement = document.getElementById("large");
let box = document.getElementsByClassName("box");
let eraseElement = document.getElementById("erase");
let clearElement = document.getElementById("clear");
let colorElement = document.getElementById('color');
window.addEventListener("load", function () {
  createGrid(medium);
  smallBox();
  mediumBox();
  largeBox();
  draw();
});

function createGrid(input) {
  const width = 640;
  const height = 320;
  
  let length = ((input * input) * (height / width));
  let sizeOfSquare = width / input;
  for (i = 0; i < length; i++) {
    let para = document.createElement("p");
    para.textContent = "";
    para.style.width = sizeOfSquare + "px"
    para.style.height = sizeOfSquare + "px"
    para.style.margin = "0";
    container.appendChild(para);
    para.setAttribute("class", "box");
  }
}
function draw(){
  for (let element of box) {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "#00203fff";
    })
  }
}


function smallBox(){
  smallElement.addEventListener("click",function(){
   reset();
    createGrid(small);
    draw();
})
}
function mediumBox(){
  mediumElement.addEventListener("click",function(){
   reset();
    createGrid(medium);
    draw();
})
}
function largeBox(){
  largeElement.addEventListener("click",function(){
   reset();
    createGrid(large);
    draw();
})
}
function reset(){
  remove();
  for (let element of box) {
    element.style.backgroundColor = "#ffffff";
  }
}
function remove(){ 
  while(container.firstChild){
      container.removeChild(container.firstChild) ;
}
}
eraseElement.addEventListener("click",function(){
  for (let element of box) {
    element.remove();;
  }
})
clearElement.addEventListener("click", function(){
  remove();
})
colorElement.addEventListener("click", function(){
        let colorValue = colorElement.value;  
        for (let element of box) {
          element.addEventListener("mouseover", function () {
            element.style.backgroundColor = colorValue;
          })
        }
})
let modal = document.getElementById("modal");
let body = document.getElementById("body1");

   window.addEventListener("resize", function(){
    if(window.outerWidth < 1280){
      modal.style.display ="flex";
      body.style.display = "none";
      
    }
    else{
      modal.style.display ="none";
      body.style.display = "flex";
      
    }

})
window.addEventListener("'DOMContentLoaded'", function(){

  if(window.outerWidth < 1280){
    modal.style.display ="flex";
    body.style.display = "none";
    
  }
  else{
    modal.style.display ="none";
    body.style.display = "flex";
    
  }

})
if(window.outerWidth < 1280){
  modal.style.display ="flex";
  body.style.display = "none";
  
}
else{
  modal.style.display ="none";
  body.style.display = "flex";
  
}