const checkbox = document.getElementById('check');
  checkbox.addEventListener('change', function() {
    const yearlySpan = document.querySelector('.yearly');
    const monthlySpan = document.querySelector('.monthly');
    const freeMonths = document.querySelectorAll('.free-months');
    const advanced = document.getElementById('Advanced');
    const pro = document.getElementById('Pro');
    const arcade = document.getElementById('Arcade');
    const prices = document.querySelectorAll('.price');
    if (checkbox.checked) {
      yearlySpan.style.color = 'var(--marine-blue)';
      monthlySpan.style.color = 'var(--cool-gray)';
      freeMonths.forEach(month => month.style.display = 'block');
      arcade.innerHTML = '$90/yr';
      advanced.innerHTML = '$120/yr';
      pro.innerHTML = '$150/yr';
      prices.forEach(price => {
        let number = price.getAttribute('value');
        price.innerHTML = '+$' + number * 10 + '/yr';
      })

    } else {
      yearlySpan.style.color = 'var(--cool-gray)'; 
      monthlySpan.style.color = 'var(--marine-blue)'; 
      freeMonths.forEach(month => month.style.display = 'none');   
      arcade.innerHTML = '$9/mo';
      advanced.innerHTML = '$12/mo';
      pro.innerHTML = '$15/mo'; 
      prices.forEach(price => {
        let number = price.getAttribute('value');
        price.innerHTML = '+$' + number + '/mo';
      })
    }
    
});