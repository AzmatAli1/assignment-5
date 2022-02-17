//handle calculate-button

document.getElementById('calculate-button').addEventListener('click', function(){
    const foodCost = document.getElementById('food-input');
    const totalFoodAmount = foodCost.value;
    const totalFoodCost = parseFloat(totalFoodAmount);
    


    const rentCost = document.getElementById('rent-input');
    const totalRentAmount = rentCost.value;
    const totalRentCost = parseFloat(totalRentAmount); 
    

    const clothesCost = document.getElementById('clothes-input');
    const totalClthesAmount = clothesCost.value;
    const totalClothesCost = parseFloat(totalClthesAmount);


    const calculateTotal = document.getElementById('expenses-input');
    calculateTotal.innerText = parseFloat(totalFoodCost + totalRentCost + totalClothesCost);
    const cost = calculateTotal.innerText;

// handle income and balance
    const income = document.getElementById('income-input');
    const totalIncomeAmount = income.value;
    const totalIncome = parseFloat(totalIncomeAmount);

    const incomeTotal = totalIncome-cost;
    const balanceTotal = document.getElementById('balance-input');
    balanceTotal.innerText = incomeTotal;
    
  
});

document.getElementById('save').addEventListener('click', function(){
    const saveInput = document.getElementById('save-input');
    const totalSaveAmount = saveInput.value;
    const totalSave = parseFloat(totalSaveAmount);
    console.log('ok');
})



