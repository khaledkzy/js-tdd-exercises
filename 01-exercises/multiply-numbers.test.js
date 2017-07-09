/*
    Similar to the add-numbers function, 
    write a function that multiplies any
    number of arguments passed to it.
    some expectations:
        multiply(4, 2)  // --> 8
        multiply(2, 2, 3)  // --> 12
    Write your implementation in TDD
        1. Add a Test (see it failing - RED)
        2. Write Code (to make it pass - GREEN)
        3. Refactor if needed
        4. REPEAT
 */
function multiply() {
    var numbers = Array.prototype.slice.call(arguments);
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        if (typeof (numbers[i]) === "number") {
            total *= numbers[i];
        }
        else {
            return "you didn't pass a number"
        }
    } return total
}


test('multiply two numbers', function () {
    var result = multiply(5, 5);
    expect(result).toEqual(25);
});


test('multiply  return 1 when we don\'t pass a number', function () {
    var result = multiply();
    expect(result).toEqual(1);
});
test('multiply should return 0 when we pass 0', function () {
    var result = multiply(0);
    expect(result).toEqual(0);
});
test('multiply should return 0 when we pass 0 and number', function () {
    var result = multiply(0, 4);
    expect(result).toEqual(0);
});
test('multiply should return 0 when we pass 0 and multiple number', function () {
    var result = multiply(0, 4, 2, 3, 4);
    expect(result).toEqual(0);
});
test('multiply should return an error when passed with a string', function () {
    var result = multiply('khaled', 4, 2, 3, 4);
    expect(result).toEqual(`you didn't pass a number`);
});