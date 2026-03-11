// const imageEl = document.querySelector(".image-container")
// const prevEl = document.getElementById("prev")
// const nextEl = document.getElementById("next")

// let x = 0
// let timer;
// prevEl.addEventListener("click",()=>{
//     x+=45
//     updateGallery()
//     clearTimeout(timer)
// })

// nextEl.addEventListener("click",()=>{
//     x-=45
//     updateGallery()
//     clearTimeout(timer)
// })

// function updateGallery(){
//     imageEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
//     timer = setTimeout(() => {
//         x-= 45
//         updateGallery()
//     },3000);
// }

// updateGallery()

// Get the all id in Html
let topText = document.getElementById("header");
let btn = document.getElementById("btn");
let shoId = document.querySelector("#showGrade");
// click to working events
btn.addEventListener("click",()=>{
    // header function start
    function head(){
        topText.innerText="Result";
        topText.style.color="#8d078dff";
        btn.innerText="Grade";
    }
    head();
    // header function end 
    let userInput = document.getElementById("Result").value;
    let result = Number(userInput);
    // common style
    shoId.style.fontFamily="serif";
    shoId.style.fontSize ="25px";
    shoId.style.fontWeight ="600";
    if(result>100||result<0){
        alert("Please valid Number between 1 and 100 !");
    }
    else if(result>=80){
        shoId.innerHTML="A+"; 
        shoId.style.color = "#3023e6ed";
    }
    else if(result>=70){
        shoId.innerHTML="A";
        shoId.style.color = "#3023e6ed";
    }
    else if(result>=60){
        shoId.innerHTML="B";
        shoId.style.color = "#3023e6ed";
    }
    else if(result>=50){
        shoId.innerHTML="C";
        shoId.style.color = "#3023e6ed";
    }
    else if(result>=40){
        shoId.innerHTML="D";
        shoId.style.color = "#3023e6ed";
    }
    else{
        shoId.innerHTML = "F";
        shoId.style.color = "red";
    }
})



