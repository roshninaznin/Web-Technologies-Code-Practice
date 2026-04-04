function validation(){
    let error=document.getElementById("error");
    error.style.color="red";
    error.style.fontSize="20px";
    error.style.fontWeight="bolder";
    let name=document.getElementById("name").value;

    if(name==""){
        alert("Name can not be empty");
        error.innerHTML="Name can not be empty.";
        return;
    }

    let char= name[0].toLowerCase();
    if(!(char>='a' && char <='z')){
        alert("First letter must be in a-z or A-Z");
        error.innerHTML="First letter must be in a-z or A-Z";
        return;
    }

    let word= name.split(" ");
    if(word.length<2){
        alert("Name must be in two words.");
        error.innerHTML="Name must be in two words";
        return;
    }

    for(let i=0; i<name.length; i++){
        let char=name[i].toLowerCase();

        if(!((char>='a' && char<='z')|| char=='.' || char=='-' || char==" ")){
            alert("Only letter, dot, dash and space are allowed");
            error.innerHTML="onlu letter, dot, dash, and space are allowed";
            return;
        }
    }


    //email

    let email= document.getElementById("email").value;
    if(email==""){
        alert("Email can not be empty");
        error.innerHTML="Email can not be empty";
        return;
    }

    if(!(email.includes("@"))){
        alert("Email must contain the symbol, and email format shoyd be example@gmail.com");
        error.innerHTML="Email must contain the symbol [@], and email format should be example@gmail.com";
        return;
    }
    if(!(email.includes("."))){
        alert("Email must contain the symbol dot[.], and email format shoyd be example@gmail.com");
        error.innerHTML="Email must contain the symbol, and email format should be example@gmail.com";
        return;
    }

    //password
    let password=document.getElementById("pass").value;

     if(password==""){
        alert("Password can not be empty");
        error.innerHTML="Password can not be empty";
        return;
     }
     
     else if(password.length<8){
        alert("Password must be 8 letter");
        error.innerHTML="Password must be 8 letter";
       return;
     }
     else{
     let hasLetter=false;
     let hasNumber=false;
     hasSpecialChar=false;

    for(let i=0; i<password.length; i++){
        let char=password[i];

        if((char>='a' && char<='z') || (char>='A' && char <='Z')){
            hasLetter=true;
        }
        if(char>='0' && char<='9'){
            hasNumber=true;
        }
        if(char=='$' || char=='#' || char=='@'){
            hasSpecialChar=true;
        }
    }
    if(!hasLetter){
     alert("Password should be combination of a-z, A-Z, and '$,#,@' ");
     error.innerHTML="Password should be combination of a-z, A-Z, and '$,#,@'";
     return;
    }
    if(!hasNumber){
      alert("Password should be combination of a-z, A-Z, and '$,#,@'");
      error.innerHTML="Password should be combination of a-z, A-Z, and '$,#,@'";
      return;
    }
    if(!hasSpecialChar){
     alert("Password should be combination of a-z, A-Z, and '$,#,@'");
     error.innerHTML="Password should be combination of a-z, A-Z, and '$,#,@'";
     return;
    
    }
}


//gender

  let male=document.getElementById("male").checked;
  let female=document.getElementById("female").checked;
  let others=document.getElementById("others").checked;

  if(!male && !female && !others){
    alert("Please select a gender");
    error.innerHTML= "Please select a gender";
    return;
  }

  //dateofbirth
  let dob = document.getElementById("dob").value;

  if(dob==""){
    alert("Date of birth can not be empty");
    error.innerHTML= "Date of birth can not be empty";
    return;
  }
  

   let parts= dob.split("-");
   let yyyy= parseInt(parts[0]);
   let mm= parseInt(parts[1]);
   let dd=parseInt(parts[2]);

   if(dd<1 || dd>31){
    alert("Day must be between 1 to 31");
    error.innerHTML= "Day must be between 1 to 31";
    return;
   }
   else if(mm<1 || mm>12){
    alert("Month must be between 1 to 12");
        error.innerHTML= "Month must be between 1 to 12";
    return;
   }
  if(yyyy<=1860 || yyyy>=2016){
    alert("year must be from 1860 t0 2016");
    error.innerHTML= "year must be from 1860 t0 2016";
   return;
  }
  
  let bloodGroup = document.getElementById("bg").value;
  if(bloodGroup==""){
    alert("Please select your blood group");
    error.innerHTML="Please select your blood group";
    return;
  }
  let nationality= document.getElementById("nn").value;
  if(nationality==""){
    alert("Please select your nationality");
    error.innerHTML="Please select your nationality";
    return;
  }

  let degree= document.getElementsByName("degree[]");
  let selected=false;

  for(let i=0; i<degree.length;i++){
    if(degree[i].checked){
     selected=true;
    }
}
    if(!selected){
        alert("Please select at least one degree");
    error.innerHTML="Please select at least one degree";
    return;
    }

    let hobby= document.getElementsByName("hobby[]");
    let selected2=false;

    for(let i=0; i<hobby.length; i++){
        if(hobby[i].checked){
            selected2=true;
        }
    }
    if(!selected2){
        alert("Please select at least one hobby");
    error.innerHTML="Please select at least one hobby";
    return;
    }

  let pic=document.getElementById("pic").value;
  if(pic==""){
    alert("Please upload your picture");
    error.innerHTML="Please upload your picture";
    return false;
  }
  success.innerHTML="Form Sumission Successfully Done";
  success.style.color="green";
  success.style.fontSize="30px";
  success.style.fontWeight="bolder";
  alert("Form Sumission Successfully Done");
    return false;

  

  }

