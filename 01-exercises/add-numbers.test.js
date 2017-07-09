/**
 * Even a simple function like addNumber could have bugs
 * Add tests to prove that our adder works
 *         add(1, 2)  // --> 3
 *         add(2, 1, 3)  // --> 6
 * Consider Edge Cases:
 *      - What if we pass only one number? no numbers?
 *      - How can we trust the input of the function??
 *          - Add a Test passing a string instead of a number i.e. add('1', 2) - what happens? Is that what you expect
 *          - Improve the function to handle this case
 *      - Any more Edge cases?
 *      - Check JEST documentation and use methods other than toBe()
 * 
 */

// function add() {
//     // this line converts whatever is passed to the function into an array
//     // read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
//     var args = Array.prototype.slice.call(arguments);
//     var result = 0;
//     for (var i = 0; i < args.length; i++) {
//         result += args[i];
//     }
//     return result;
// }

function add() {
    // this line converts whatever is passed to the function into an array
    // read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    var args = Array.prototype.slice.call(arguments);
    var result = 0;
    var passed = arguments.lenght
    if (passed !== 0) {
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] === 'number') {
                result += args[i];
            } else {
                return warning
            }
        }
    }
    return result;
}

var warning = 'you passed a string'
//This is a sample test - remove it and write AT LEAST two more tests to prove the function works as expected  
test('add should add two numbers', function () {
    var result = add(1, 2);
    expect(result).toEqual(3);
    var result = add(3, 2);
    expect(result).toEqual(5);
});

test('add should add multiple numbers', function () {

    expect(add(3, 1, 1)).toEqual(5)
});

test('add function should  not add string and numbers', function () {

    expect(add('3', 1, 1)).toEqual('you passed a string')
});

test('add function should  not add string and numbers', function () {

    expect(add('khaled', 1, 1)).toEqual('you passed a string')
});

test('add function should  handle multiple number and Zero', function () {

    expect(add(0, 1, 1)).toEqual(2)
});

test('add function should  handle passing a Zero', function () {

    expect(add(0)).toEqual(0)
});