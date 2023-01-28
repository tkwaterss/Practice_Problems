// write a function that that takes a number and returns
// its factorial. example:
// `factorial(4)` // => 24 (4 * 3 * 2 * 1 = 24)

function factorial(num) {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(-7));

// recursion solution
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num *factorialize(num - 1);
}
console.log(factorialize(4));