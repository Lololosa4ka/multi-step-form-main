const addOns = document.querySelectorAll('.add-on');

addOns.forEach(function(addOn) {
  addOn.addEventListener('click', function() {
    const checkbox = this.querySelector('.add-on-checkbox');
    const label = this.querySelector('.add-on-label');

    // Toggle checkbox
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      this.classList.add('active');
      label.style.backgroundColor = 'var(--purplish-blue)';
      label.style.borderColor = 'var(--purplish-blue)';
    } else {
      this.classList.remove('active');
      label.style.backgroundColor = ''; // Resetting to default value
      label.style.borderColor = ''; // Resetting to default value
    }
  });
});