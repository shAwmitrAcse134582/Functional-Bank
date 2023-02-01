//*1.add new eventlistner to the withdraw button
//*2.withdraw  amount from the withdraw input field

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawNumber = parseFloat(newWithdrawString);

    //*3.clear WithdrawField
    withdrawField.value = '';

    //*4.add value in withdraw box from withdrawField
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const withdrawTotalElementNumber = parseFloat(withdrawTotalElementString);

    //*5.calculate total withdraw element
    const totalWithdraw = newWithdrawNumber + withdrawTotalElementNumber;
    withdrawTotalElement.innerText = totalWithdraw;

    //*6.connect withdraw amount with balance amount
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalAmount.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalString);

    const totalBalance = balanceTotalNumber - totalWithdraw;
    balanceTotalAmount.innerText = totalBalance;




})