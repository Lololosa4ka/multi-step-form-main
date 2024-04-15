document.querySelectorAll('#next-step').forEach(button => {
  button.addEventListener('click', function() {
    event.preventDefault();
    const stepsNumbers = document.querySelectorAll('.number');

    const currentForm = this.closest('form');
    const inputContainers = currentForm.querySelectorAll('.input-container');
    let allFieldsValid = true;

    inputContainers.forEach(container => {
      const input = container.querySelector('.input');
      const error = container.querySelector('.error');

      if (!input.value.trim()) {
        input.style.borderColor = 'var(--strawberry-red)';
        error.style.display = 'block';
        allFieldsValid = false;
      } else {
        input.style.borderColor = '';
        error.style.display = 'none';
      }
    });

    if (allFieldsValid) {
      event.preventDefault();
      currentForm.style.display = 'none';
      const nextForm = currentForm.nextElementSibling;
      nextForm.style.display = 'block';
      let nextElementActivated = false;

      for (let i = 0; i < stepsNumbers.length; i++) {
        const number = stepsNumbers[i];
        if (number.classList.contains('number-active')) {
          number.classList.remove('number-active');
          if (stepsNumbers[i + 1]) {
            stepsNumbers[i + 1].classList.add('number-active');
            nextElementActivated = true;
          }
        }

        if (nextElementActivated) {
          break;
        }
      }
    }
    const menu = document.querySelector('.menu')
    if (window.innerHeight < 700 && document.getElementById('form2').style.display === 'block' && window.innerWidth < 430) {
        menu.style.height = '110vh';
    } else{
        menu.style.height = '';
    }
  });
});

  
  
document.querySelectorAll('#go-back').forEach(button => {
  button.addEventListener('click', function() {
    const currentForm = this.closest('form');
    event.preventDefault();
    currentForm.style.display = 'none';
    const previosForm = currentForm.previousElementSibling;
    previosForm.style.display = 'block';
    let prevElementActivated = false;
    const stepsNumbers = document.querySelectorAll('.number');
    for (let i = stepsNumbers.length - 1; i >= 0; i--) {
        const number = stepsNumbers[i];
        if (number.classList.contains('number-active')) {
            number.classList.remove('number-active');
            // Add 'number-active' class to the previous sibling if it exists
            if (stepsNumbers[i - 1]) {
                stepsNumbers[i - 1].classList.add('number-active');
                prevElementActivated = true;
            }
        }

        if (prevElementActivated) {
            break; // Exit the loop after setting the previous element to active
        }
    }
  });
})

  // Function to move .number-active to the next number element
document.getElementById('submit').addEventListener('click', function(){
  event.preventDefault();
  document.getElementById('form4').style.display = 'none';
  document.getElementById('form5').style.display = 'flex';
  document.querySelector('.wrapper').style.display = 'flex';
});
