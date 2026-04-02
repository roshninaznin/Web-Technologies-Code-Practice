function validation(){
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;

    if(firstName=="" || lastName==""){
        alert("Name can not be empty");
        return;
    }
    
    let hasFirstChar=true;
    let hasLastChar=true;


    if(firstName.length<2 ){
        hasFirstChar=false;
        alert("First name must be contain at least 2 character.");
        return;
    }
     if(lastName.length<2 ){
        hasLastChar=false;
        alert("Last name must be contain at least 2 character.");
        return;
    }
    if(!hasFirstChar && !hasLastChar){
    alert("Invalid!! Form not submitted");
    }
    else{
        alert("Form Successsfully submitted");
    }

}