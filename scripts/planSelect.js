const plans = document.querySelectorAll('.plan');
plans.forEach(plan => {
    plan.addEventListener('click', function() {
        plans.forEach(plan => plan.classList.remove('active'));
        plan.classList.add('active'); 
    });
});