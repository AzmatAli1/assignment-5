function input(input) {
    const incomeInput = document.getElementById(input).value;
    const newInput = parseFloat(incomeInput);
    return newInput;
}
// Evant handler for Calculate button
document.getElementById('expenses').addEventListener('click', function () {
    const income = input('income');
    const foodCost = input('food-cost');
    const rentCost = input('rent-cost');
    const clochesCost = input('clothes-cost')
    //my expenses
    const expenses = document.getElementById('more-expenses');
    expenses.innerText = (foodCost + rentCost + clochesCost);
    const totalExpenses = expenses.innerText;
    if ((foodCost < 0 || rentCost < 0 || clochesCost < 0)) {
        document.getElementById('input-text').style.display = 'block';
        expenses.innerText = '00';
        balance.innerText = income - totalExpenses;
    }
    else if (income > totalExpenses) {
        const balance = document.getElementById('balance');
        balance.innerText = income - totalExpenses;
        document.getElementById('input-title').style.display = 'none';
        document.getElementById('input-text').style.display = 'none';
    }
    else {
        document.getElementById('input-title').style.display = 'block';
        balance.innerText = '00';
    }
});
// handler save button
document.getElementById('save-incom').addEventListener('click', function () {
    const savingInput = input('saving-input')
    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);
    //Amount save
    const savingAmount = document.getElementById('saving-amout');
    savingAmount.innerText = (balance / 100 * savingInput);
    const saveAmount = savingAmount.innerText;
    if (savingInput < 0 || savingInput > 100) {
        document.getElementById('wrong-save').style.display = 'block';
        const remaining = document.getElementById('remaining-balance');
        remaining.innerText = '00';
        savingAmount.innerText = '00';
    }
    else {
        //remaining
        const remainingBalance = balance - saveAmount;
        const remaining = document.getElementById('remaining-balance');
        remaining.innerText = remainingBalance;
        document.getElementById('wrong-save').style.display = 'none';
    }
});
