

// ToDo: do the full implementation using TDD

function convertToOldRoman(number) {
    var warning = `You didn't pass a number`
    var arabicNum = [1000, 500, 100, 50, 10, 5, 1];
    var romanNumbers = ["M", "D", "C", "L", "X", "V", "I"];
    var result = "";
    if (typeof number === 'number') {
        for (var i = 0; i <= arabicNum.length; i++) {
            while (arabicNum[i] <= number) {
                result += romanNumbers[i];
                number -= arabicNum[i]
            }
        } return result
    } else {
        return warning
    }

}


function convertToOldRoman(number) {
    var warning = `You didn't pass a number`
    var arabicNum = [1000, 500, 100, 50, 10, 5, 1];
    var romanNumbers = ["M", "D", "C", "L", "X", "V", "I"];
    var result = "";
    if (typeof number === 'number') {
        for (var i = 0; i <= arabicNum.length; i++) {
            while (arabicNum[i] <= number) {
                result += romanNumbers[i];
                number -= arabicNum[i]
            }
        } return result
    } else {
        return warning
    }

}

/* write the tests */
test('convertToOldRoman should return I for 1', function () {
    var result = convertToOldRoman(1);
    expect(result).toBe('I');
});
test('convertToOldRoman should return M for 1000', function () {
    var result = convertToOldRoman(1000);
    expect(result).toBe('M');
});
test('convertToOldRoman should return D for 5000', function () {
    var result = convertToOldRoman(500);
    expect(result).toBe('D');
});
test('convertToOldRoman should return MMM for 3000', function () {
    var result = convertToOldRoman(3000);
    expect(result).toBe('MMM');
});

test('convertToOldRoman should return MD for 1500', function () {
    var result = convertToOldRoman(1500);
    expect(result).toBe('MD');
});

test('convertToOldRoman should return VII for 7', function () {
    var result = convertToOldRoman(7);
    expect(result).toBe('VII');
});
test('convertToOldRoman should display the warning in case you passed a string', function () {
    var result = convertToOldRoman('d');
    expect(result).toBe(`You didn't pass a number`);
});
``