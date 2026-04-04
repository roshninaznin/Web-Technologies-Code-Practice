let btn = document.getElementById("btn");
let count = 0;

btn.addEventListener("click", function () {

    count++;

    if (count == 1) {
        document.body.style.backgroundColor = "blue";
    }
    else if (count == 2) {
        document.body.style.backgroundColor = "yellow";
    }
    else if (count == 3) {
            count= 0;

      document.body.style.backgroundColor = "red";

        
    }
   

});