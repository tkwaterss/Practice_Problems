// Write a function called combinator that is given two arrays as arguments.
// The first array is an array of first names, and the second array is an
// array of last names. Have the function return a new array combining
// the first names and the last names.

// combinator([‘Jason', ‘Dan’, ‘Cahlan’], [‘Turner’, ‘Kesler’, ‘Sharp’]); →
// [‘Jason Turner’, ‘Dan Kesler’, ‘Cahlan Sharp’]

const testFirst = ["bob", "bill", "nick", "ted"];
const testLast = ["stop", "tits", "slap", "piss"];


//Solution #1
function combinator(arrFirst, arrLast) {
    let firstLast = [];
    for(i = 0; i < arrFirst.length; i++) {
        firstLast.push(arrFirst[i] + ' ' + arrLast[i]);
    }
    return firstLast;
}

console.log(combinator(testFirst,testLast));