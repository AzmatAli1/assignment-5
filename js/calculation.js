document.getElementById('income-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-button');
    

    const newIncomeInput = incomeInput.value;
    const newIncomeInput = parseFloat(newIncomeInput);
    const calculate = document.getElementById('income-button')

    const totalAmount = food-cost + rent-cost + clothes-cost;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const calculate =  food + rent + clothes;
    balanceTotal.innerText = newBalanceTotal;

})