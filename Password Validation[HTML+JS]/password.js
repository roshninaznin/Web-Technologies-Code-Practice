function validation(){
    

  let passData = document.getElementById("pass").value;

if (passData == "") {
    alert("Password cannot be empty");
    return;
}

if (passData.length < 8) {
    alert("Password must contain at least 8 characters");
    return;
}
else{
let hasLetter = false;
let hasNumber = false;
let hasSpecialChar = false;


for (let i = 0; i < passData.length; i++) {
    let p = passData[i];

    if ((p >= 'a' && p <= 'z') || (p >= 'A' && p <= 'Z')){
        hasLetter = true;
    } 
    if(p === "$" || p === "#" || p === "@") {
        hasSpecialChar = true;
    }
    if (p>=0 && p<=9){
        hasNumber=true;
    }
}

if (!hasLetter) {
    alert("Add letters (a-z, A-Z) ");
    return;
}
if (!hasSpecialChar) {
    alert("Add special char (@, #, $) ");
    return;
}
if (!hasNumber) {
    alert("Add number (0-9) ");
    return;
}

alert("Password is valid ");   
}

}

