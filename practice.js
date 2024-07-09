function capitalize(input) {
    let text = input.toString();
    let firstChar = text.charAt(0);
    let remainder = text.slice(1);
    let newFirst = firstChar.toUpperCase();
    let newRemains = remainder.toLowerCase();
    let capped = newFirst.concat(newRemains);

    return capped;
}

module.exports = { capitalize }