// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use an interative solution to this problem; if you finish with
// time left over, implement a recursive solution.
// * nthFibonacci(2); // => 2
// * nthFibonacci(3); // => 3
// * nthFibonacci(4); // => 5

//fibonacci example
//1,1,2,3,5,8,13

//iterative solution
const fibonacci = (num) => {
    const array = [1, 1];
    for (let i = 2; i <= num; i++) {
        array.push(array[i -1] + array[i - 2]);
        console.log(array);
        if (i === num) {
            return array[i];
        }
    }
}
console.log(fibonacci(4));

//Recursive Solution - returns one short of the expected value
function fibonacci2(n) {
    if ( n < 2 ) {
        return n;
    } else {
        return fibonacci2(n - 2) + fibonacci2 (n - 1);
    }

}
console.log(fibonacci2(5))