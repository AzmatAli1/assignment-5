function inputId(input) {
    const inputValue = document.getElementById(input).value;
    const totalInput = parseFloat(inputValue);
    // if (totalInput < 0) {

    //     document.getElementById('invalid-input').style.display = 'block';
    //     return;
    // }
    return totalInput;
}


// Evant handler calculate


document.getElementById('calculate-button').addEventListener('click', function () {

    const income = inputId('income');
    const foodInput = inputId('food-input');
    const rentInput = inputId('rent-input');
    const clothesInput = inputId('clothes-input')


    // Error Expenses


    const expenses = document.getElementById('total-input');
    expenses.innerText = (foodInput + rentInput + clothesInput);
    const totalExpenses = expenses.innerText;
    if ((foodInput < 0 || rentInput < 0 || clothesInput < 0)) {
        document.getElementById('invalid-input').style.display = 'block';
        expenses.innerText = '000';
        balance.innerText = income - totalExpenses;
    }
    else if (totalExpenses<income ) {
        const balance = document.getElementById('balance');
        balance.innerText = income - totalExpenses;
        document.getElementById('invalid-message').style.display = 'none';
        document.getElementById('invalid-input').style.display = 'none';
    }
    else {
        document.getElementById('invalid-message').style.display = 'block';
        balance.innerText = '000';
    }
});


/* // Eevnt handler for save button


document.getElementById('save').addEventListener('click', function () {
    const savingInput = inputId('saving-input')
    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);


    //event savings


    const savingAmount = document.getElementById('saving-amout');
    savingAmount.innerText = (balance / 100 * savingInput);
    const saveAmount = savingAmount.innerText;
    if (savingInput < 0 || savingInput > 100) {
        document.getElementById('wrong-save').style.display = 'block';
        const remaining = document.getElementById('remaining-balance');
        remaining.innerText = '000';
        savingAmount.innerText = '000';
    }
        //Remaining Balance

        else {

        const remainingBalance = balance - saveAmount;
        const remaining = document.getElementById('remaining-balance');
        remaining.innerText = remainingBalance;
        document.getElementById('wrong-save').style.display = 'none';
    }
});

 */































//handle calculate-button
/* 
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

// handle savings percent


document.getElementById('save-percent').addEventListener('click', function(){
    const saveInput = document.getElementById('save-input');
    const totalSaveAmount = saveInput.value;
    const totalSave = parseFloat(totalSaveAmount); 
    const total = document.getElementById('save-input').innerText;
    const totalBalance = parseFloat(total); 
    console.log('ok');



    const savingInput = document.getElementById('savings-amount');
    const saving = parseFloat(totalBalance/ 100 * savingInput);
    savingInput.innerText = saving;
    const saveAmount = savingInput.innerText;

    const remainingBalance = totalBalance - saveAmount;
    const remaining = document.getElementById('remainingBalance');
   console.log('ok code');
});
    
 */


