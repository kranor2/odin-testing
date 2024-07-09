const { capitalize, reverseString } = require('./practice');

test('capitalize', () => {
    expect(capitalize("tyrannosaurus")).toBe("Tyrannosaurus");
});

test('capitalize', () => {
    expect(capitalize("dinos say rawr")).toBe("Dinos say rawr");
});

test('capitalize', () => {
    expect(capitalize("RAAAAAWR!")).toBe("Raaaaawr!");
});

test('reverseString', () => {
    expect(reverseString("ankylosaurus")).toBe("suruasolykna");
});