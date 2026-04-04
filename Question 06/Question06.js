 let arr = [1, 2, 3, 4, 5]; 

    const display = document.getElementById('arrayDisplay'); 

 

    function updateDisplay() { 

      display.innerHTML = arr; 

    } 

 

    function addNumber() { 

      let nextNumber = arr.length ? arr[arr.length - 1] + 1 : 1; 

      arr.push(nextNumber); 

      updateDisplay(); 

    } 

 

    function removeLast() { 

      if (arr.length > 0) { 

        arr.pop(); 

        updateDisplay(); 

      } else { 

        alert("Array is already empty!"); 

      } 

    } 

 

    function doubleValues() { 

      arr = arr.map(num => num * 2); 

      updateDisplay(); 

    } 

 

    function resetArray() { 

      arr = [1, 2, 3, 4, 5]; 

      updateDisplay(); 

    } 

 

    document.getElementById('addNumberBtn').addEventListener('click', addNumber); 

    document.getElementById('removeLastBtn').addEventListener('click', removeLast); 

    document.getElementById('doubleValuesBtn').addEventListener('click', doubleValues); 

    document.getElementById('resetBtn').addEventListener('click', resetArray); 

 

    updateDisplay();