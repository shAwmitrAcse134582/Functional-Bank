//*1.add eventhandler to the deposit button
//*2.add deposit amount from the deposit intput field

document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDepositNumber = parseFloat(newDepositString);
    //* 3.clear the deposit value after getting the value
    depositField.value = '';

    //*4.update deposit amount to take input from daposit value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);

    //*5. Calculate the sum of deposit total element

    const newDepositTotal = previousDepositTotalNumber + newDepositNumber;
    depositTotalElement.innerText = newDepositTotal;

    //*6.interacting between balance field and deposit field
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalAmount.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalString);

    const totalBalance = balanceTotalNumber + newDepositTotal;
    balanceTotalAmount.innerText = totalBalance;



});



