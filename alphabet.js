// write a functin that takes in a string, and returns that string with all
// its letters in alphabetal order. assume there will be no punctuation or
// numbers. example: `alphabet('hello')` // => 'ehllo'

//First Solution
// const alphabet = function(string) {
//     return string.split("").sort().join('');
// }
// console.log(alphabet("hello"));

const alphabet = function(string) {
    let array = string.split('');
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j] < array[i]) {
                array.splice(j,1).unshift(j);
            }
        }
    }
    return array.join('');
}

console.log(alphabet("hello"));