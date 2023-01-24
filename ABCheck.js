// Write a function called ABCheck that takes a string parameter and return true
// if the characters a and b are separated by exactly 3 places anywhere
// in the string at least once (ie. "lane borrowed" would result in true
// because there is exactly three characters between a and b).
// Otherwise return false.


/*
Using regular expressions to check if a and b are seperated
by three wildcard characters regardless of case
*/

//Commented out solution below

let ABCheck = function (string) {
    return /a...b/gi.test(string) || /b...a/gi.test(string);
}
console.log(ABCheck("adfb"));

/*
alternate longer method first changes all characters in the
string (str) to lower case. Then ustilized a for loop to cycle
through the new string either looking for an a followed by b
or a b followed by a (seperated by 3 characters).
If found returns true.
After for loop completes and nothing is found, returns false.
*/

// let ABCheck = function (str) {
//     let string = str.toLowerCase()
//     for(let i = 0; i < string.length; i++) {
//         if(string[i] == "a" && string[i + 4] == "b" ||
//         string[i] == "b" && string [i + 4] == "a") {
//             return true;
//         } 
//     }
//     return false;
// }
// console.log(ABCheck("Asdfb"));
// console.log(ABCheck("Bsdfa"));
// console.log(ABCheck("asfb"));
// console.log(ABCheck("asdsfb"));