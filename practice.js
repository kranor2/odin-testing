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

module.exports = { capitalize, reverseString }