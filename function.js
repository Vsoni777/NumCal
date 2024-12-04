
  
    const dis = document.getElementById('content');
    const buttons = document.querySelectorAll('.btnrow');
    const eqButton = document.getElementById('eq');

   
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.value === 'AC') {
                // Clear the display
                dis.value = '';
            } else if (button.value === 'DEL') {
                // Remove the last character
                dis.value = dis.value.slice(0, -1);
            } else {
                // Append the button value to the display
                dis.value += button.value;
            }
        });
    });

  
    eqButton.addEventListener('click', function() {
        try {
            // Evaluate the expression and display the result
            dis.value = eval(dis.value);
        } catch (error) {
            // Handle any errors (e.g., invalid input)
            alert('Invalid expression');
            dis.value = '';
        }
    });

