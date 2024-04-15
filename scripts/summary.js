const summaryBuilder =  function() {
    const checkbox = document.getElementById('check');
    const plans = document.querySelectorAll('.plan');
    let planAttributes; // Declare planAttributes here
    let total = 0;
    const getPlanName = (timing) => {
        let planText = '';
        let planPrice = '';
        plans.forEach(plan => {
            if (plan.classList.contains('active')) {
                const planElement = plan.querySelector('.medium');
                if (planElement) {
                    planText = planElement.textContent + timing;
                    planPrice = plan.querySelector('.description').textContent;
                    total += parseInt(plan.querySelector('.description').getAttribute('value'));
                }
            }
        });
        return [planText, planPrice];
    }
    
    //yearly
    if (checkbox.checked) {
        planAttributes = getPlanName("(Yearly)");
    }
    //monthly
    else {
        planAttributes = getPlanName("(Monthly)");
    }
    const planText = planAttributes[0];
    const planPrice = planAttributes[1];
    document.getElementById("plan-name").textContent = planText;
    document.getElementById("plan-price-summary").textContent = planPrice;
    const addOns = document.querySelectorAll('.add-on');
    const addOnsSelected = {};
    addOns.forEach(addOn => {
        if (addOn.classList.contains('active')) {
            addOnsSelected[addOn.querySelector('.add-on-name').textContent] = addOn.querySelector('.price').textContent;
            total += parseInt(addOn.querySelector('.price').getAttribute('value'));
    }
    });

      const addOnsContainer = document.createElement('div');
      addOnsContainer.classList.add('add-ons-selected');
  
      for (const [addOn, price] of Object.entries(addOnsSelected)) {
        const addOnDescription = document.createElement('p');
        addOnDescription.classList.add('description');
        addOnDescription.textContent = addOn;
  
        const addOnPrice = document.createElement('p');
        addOnPrice.textContent = price;
  
        const addOnDiv = document.createElement('div');
        addOnDiv.appendChild(addOnDescription);
        addOnDiv.appendChild(addOnPrice);
  
        addOnsContainer.appendChild(addOnDiv);
      }
  
      const mainSummary = document.querySelector('.main-summary');
      const mainSummaryText = mainSummary.querySelector('.main-summary-text');
      mainSummary.insertBefore(addOnsContainer, mainSummaryText.nextSibling);
      if (checkbox.checked) {
        total *= 10;
        document.getElementById("total-price").textContent = '+$' + total + '/yr';
    }else{
        document.getElementById("total-price").textContent = '+$' + total + '/mo';
    }
    
};
document.getElementById('change-plan').addEventListener('click', function() {
    document.getElementById('form4').style.display = 'none';
    document.getElementById('form2').style.display = 'block';
    document.querySelectorAll('.number').forEach(number => number.classList.remove('number-active'));
    document.getElementById('number2').classList.add('number-active');
});