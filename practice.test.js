const { capitalize, reverseString, Calculator, calculator, isUpperCase, isLowerCase, isAlphabet, cipher, caesarCipher } = require('./practice');

test('capitalize-single', () => {
    expect(capitalize("tyrannosaurus")).toBe("Tyrannosaurus");
});

test('capitalize-phrase', () => {
    expect(capitalize("dinos say rawr")).toBe("Dinos say rawr");
});

test('capitalize-exclaim', () => {
    expect(capitalize("RAAAAAWR!")).toBe("Raaaaawr!");
});

test('reverseString', () => {
    expect(reverseString("ankylosaurus")).toBe("suruasolykna");
});

test('add-int', () => {
    expect(calculator.add(5, 4,)).toBe(9);
});

test('add-dec', () => {
    expect(calculator.add(0.5, 0.4)).toBeCloseTo(0.9);
});

test('subtract-int', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract-dec', () => {
    expect(calculator.subtract(0.5, 0.4)).toBeCloseTo(0.1);
});

test('multiply', () => {
    expect(calculator.multiply(5, 4)).toBe(20);
});

test('divide-zero', () => {
    expect(calculator.divide(4, 0)).toBe("Error! Cannot divide by 0");
});

test('divide-reg', () => {
    expect(calculator.divide(20, 4)).toBe(5);
});

test('caesar-cipher-last', () => {
    expect(caesarCipher("xyz", 5)).toBe("cde");
});

test('caesar-cipher-with-caps', () => {
    expect(caesarCipher("rAwR xD", 3)).toBe("uDzU aG");
})

test('caesar-cipher-ignore-nonLetters', () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});