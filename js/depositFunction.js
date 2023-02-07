// function getinput(inputId) {
//     const inputField = document.getElementById(inputId);
//     const inputFieldString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldString);
//     return inputFieldValue;
// }

// function getElementValueById(elementId) {
//     const element = document.getElementById(elementId);
//     const elementValueString = element.innerText;
//     const value = parseFloat(elementValueString);
//     return value;
// }
// function getElementTextById(elementId) {
//     const textElement = document.getElementById(elementId);
//     const textElementString = textElement.innerText;
//     const textElementValue = parseFloat(textElementString);
//     return textElementValue;
// }

// function setTextElement(elementId, newValue) {
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newValue;
// }

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getinput('deposit-field');

    const previousDepositTotal = getElementTextById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElement('deposit-total', newDepositTotal);

    const previousBalanceTotal = getElementTextById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElement('balance-total', newBalanceTotal);

})
