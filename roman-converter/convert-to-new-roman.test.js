
function convertToNewRoman(num) {
  var values = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
    result = '',
    i;
  for (i in values) {
    while (num >= values[i]) {
      result += i;
      num -= values[i];
    }
  }
  return result;
}

/* write the tests */
test('convertToNewRoman should return I for 1', function () {
  var result = convertToNewRoman(1);
  expect(result).toBe('I');
});
test('convertToNewRoman should return CM for 900', function () {
  var result = convertToNewRoman(900);
  expect(result).toBe('CM');
});
test('convertToNewRoman should return CMI for 901', function () {
  var result = convertToNewRoman(901);
  expect(result).toBe('CMI');
});
test('convertToNewRoman should return LV for 55', function () {
  var result = convertToNewRoman(55);
  expect(result).toBe('LV');
});