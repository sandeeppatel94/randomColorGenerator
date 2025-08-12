let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
   let color = randomColor();
   let div = document.querySelector("div")
   div.style.backgroundColor = color;
   let h1 = document.querySelector("h1");
   h1.innerText = color;
    
})


function randomColor(){
    let red = Math.floor(Math.random()*255)+1
    let green = Math.floor(Math.random()*255)+1
    let blue = Math.floor(Math.random()*255)+1
    
    let color = `rgb(${red},${green},${blue})`;
    return color;
}