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

function isUpperCase(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    }
}

function isLowerCase(char) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        return true;
    } else {
        return false;
    }
}

function isAlphabet(char) {
    if (isLowerCase(char) || isUpperCase(char)) {
        return true;
    } else {
        return false;
    }
}

function cipher(char, key) {
    if (isLowerCase(char)) {
        let newCode = char.charCodeAt(0) + key;
        if (newCode > 122) newCode = 96 + newCode - 122
        return String.fromCharCode(newCode);
    } else {
        let newCode = char.charCodeAt(0) + key;
        if (newCode > 90) newCode = 64 + newCode - 90;
        return String.fromCharCode(newCode);
    }
}

function caesarCipher(input, key) {
    let encrypted = '';
    for (let char of input) {
        if (isAlphabet(char)) {
            encrypted += cipher(char, key);
        } else {
            encrypted += char;
        }
    }
    return encrypted;
}

module.exports = { capitalize, reverseString, Calculator, calculator, isUpperCase, isLowerCase, isAlphabet, cipher, caesarCipher }