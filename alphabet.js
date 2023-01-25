// write a functin that takes in a string, and returns that string with all
// its letters in alphabetal order. assume there will be no punctuation or
// numbers. example: `alphabet('hello')` // => 'ehllo'

First Solution
const alphabet = function(string) {
    return string.split("").sort().join('');
}
console.log(alphabet("hello"));

//Unfinished alternate solution (issue is .slice or .splice)
// const alphabet = function(string) {
//     let array = string.split('');
//     for (i = 0; i < array.length; i++) {
//         for (j = 0; j < array.length; j++) {
//             if (array[j] < array[i]) {
//                 array.slice(j,1).unshift(j);
//             }
//         }
//     }
//     return array.join('');
// }

// console.log(alphabet("hello"));