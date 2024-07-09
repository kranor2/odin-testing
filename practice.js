function capitalize(input) {
    let text = input.toString();
    let firstChar = text.charAt(0);
    let remainder = text.slice(1);
    let newFirst = firstChar.toUpperCase();
    let newRemains = remainder.toLowerCase();
    let capped = newFirst.concat(newRemains);

    return capped;
}

function reverseString(input) {
    let revved = "";
    for (let i = input.length - 1; i >= 0; i--) {
        revved += input[i];
    }

    return revved
}

class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
    
    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            return "Error! Cannot divide by 0";
        } else {
            return num1 / num2;
        }
    }
}

const calculator = new Calculator

module.exports = { capitalize, reverseString, Calculator, calculator }