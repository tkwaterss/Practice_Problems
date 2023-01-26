// write a function that finds the common factors of two numbers,
// and returns them sorted from highest to lowest.
// example with 12 and 18:
// factors of 12 are 12, 6, 4, 3, 2, 1
// factors of 18 are 18, 9, 6, 3, 2, 1
// so the common factors of 12 and 18 are 6, 3, 2, 1
// another example: console.log(commonFactors(20, 25)) // => [5, 1]

//Solution #1
/*
Iterate through each number and create an array of their factors using %
Iterate through the two new arrays and find matching values, add to new array
*/

let top = 30;
let bottom = 15;

function commonFactors(high,low) {
    let highFactors = [];
    let lowFactors = [];
    for(let i = 1; i <= high; i++) {
        if (high % i === 0) {
            highFactors.push(i);
        }
    }
    for(let i = 1; i <= low; i++) {
        if (low % i === 0) {
            lowFactors.push(i);
        }
    }
    let matching = [];
    for(let i = 0; i < highFactors.length; i++) {
        for(let j = 0; j < lowFactors.length; j++) {
            if(highFactors[i] === lowFactors[j]) {
                matching.push(lowFactors[j]);
            }
        }
    }
    return matching;
}

console.log(`The common factors of ${top} and ${bottom} are ${commonFactors(top,bottom)}`);

//Solution #2 (directly from problem)
function commonFactor(num1, num2) {
    const factors = []
    let max
    max = num1 > num2 ? num1 : num2
    for (let i = max; i >= 1; i--) {
      if (num1 % i === num2 % i) {
        factors.push(i)
      }
    }
    return factors
  }

  console.log(`The common factors of ${top} and ${bottom} are ${commonFactor(top,bottom)}`);