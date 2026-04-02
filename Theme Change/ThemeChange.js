let heading=document.getElementById("head");
let paragraph=document.getElementById("para");
let body=document.getElementById("bd");

let button1=document.getElementById("btn1");
let button2=document.getElementById("btn2");
let button3=document.getElementById("btn3");
let button4=document.getElementById("btn4");
let button5=document.getElementById("btn5");


button1.addEventListener("click", function(){
    body.style.backgroundColor ="black";
    heading.style.color="white";
    paragraph.style.color="white";

});
button2.addEventListener("click",function(){
    body.style.backgroundColor="white";
    heading.style.color="black";
    paragraph.style.color="black";
});

button3.addEventListener("click",function(){
    body.style.backgroundColor="pink";
    heading.style.color="black";
    paragraph.style.color="black";
});
button4.addEventListener("click",function(){
    body.style.backgroundColor="yellow";
    heading.style.color="black";
    paragraph.style.color="black";
});
button5.addEventListener("click",function(){
    body.style.backgroundColor="brown";
    heading.style.color="yellow";
    paragraph.style.color="yellow";
});