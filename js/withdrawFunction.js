document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getinput('withdraw-field');
    const previousWithdrawTotal = getElementTextById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElement('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getElementTextById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElement('balance-total', newBalanceTotal);
})
