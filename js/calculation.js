//handle calculate-button

document.getElementById('calculate-button').addEventListener('click', function(){
    const foodCost = document.getElementById('food-input');
    const totalFoodAmount = foodCost.value;
    const totalFoodCost = parseFloat(totalFoodAmount);
    console.log(totalFoodCost);


    const rentCost = document.getElementById('rent-input');
    const totalRentAmount = rentCost.value;
    const totalRentCost = parseFloat(totalRentAmount); 
    

    const clothesCost = document.getElementById('clothes-input');
    const totalClthesAmount = clothesCost.value;
    const totalClothesCost = parseFloat(totalClthesAmount);


    const calculateTotal = document.getElementById('expenses-input');
    calculateTotal.innerText = parseFloat(totalFoodCost + totalRentCost + totalClothesCost);


    const income = document.getElementById('income-input');
    const totalIncomeAmount = totalIncome.value;
    const totalIncome = parseFloat(totalIncomeAmount);


    const balanceInput = document.getElementById('balance-input');
    const balanceTotal = balanceInput.value;
    const totalBalanceInput = totalIncome - calculateTotal;

});


