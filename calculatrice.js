const buttons = document.querySelectorAll('.btn-num');
console.log("Boutons trouvés:", buttons);

const display = document.querySelector('#display');

let arrayNumber = [];
let currentNumber = '';
let currentOperator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (!isNaN(value)) { 
            currentNumber += value; 
            display.textContent += value;
            console.log("Nombre courant:", currentNumber);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentNumber) {
                arrayNumber.push(parseFloat(currentNumber)); 
                currentNumber = '';
            }
            if (currentOperator && arrayNumber.length > 1) {
                performCalculation();
            }
            currentOperator = value;
            display.textContent += ' ' + value + ' ';
            console.log("Opérateur choisi:", currentOperator);
        } else if (value === '=') {
            if (currentNumber) {
                arrayNumber.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            if (currentOperator && arrayNumber.length > 1) {
                performCalculation();
                display.textContent = arrayNumber[0];
                currentOperator = null;
            }
        } else if (value === 'CE') {
            display.textContent = '';
            arrayNumber = [];
            currentNumber = '';
            currentOperator = null;
            console.log("Réinitialisation de la calculatrice.");
        }
    });
});

function performCalculation() {
    let result = arrayNumber[0];
    for (let i = 1; i < arrayNumber.length; i++) {
        if (currentOperator === '+') {
            result += arrayNumber[i];
        } else if (currentOperator === '-') {
            result -= arrayNumber[i];
        } else if (currentOperator === '*') {
            result *= arrayNumber[i];
        } else if (currentOperator === '/') {
            result /= arrayNumber[i];
        }
    }
    arrayNumber = [result];
    console.log("Résultat après opération:", result);
}
