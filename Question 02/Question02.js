let username = document.getElementById("username").value;

    addEventListener("keyup",function userType(){
        let newValue= document.getElementById("username").value.toUpperCase();
        document.getElementById("head").innerHTML = newValue;

});
