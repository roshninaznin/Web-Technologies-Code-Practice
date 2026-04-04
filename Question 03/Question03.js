function check(){
    
let age = document.getElementById("age").value;
let head = document.getElementById("head");


age
  if(age<40){
    head.innerHTML="To be a part of the community, you need to at least 40";
  }
  else if(age>40  && age<50){
    head.innerHTML="You are the youngsters of this community";
  }
  else{
    head.innerHTML= "Top level members of the group";
    head.style.color="red";
  }
}