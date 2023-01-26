// reverse an array

let test = [1,2,3,4,5];

//Working solution #1 (copied from solutions)
function reverseArray1(array) {
    const inverseArr = []
    for (let i = array.length - 1; i >= 0; i--) {
      inverseArr.push(array[i])
    }
    return inverseArr
  }

  //Working solution #2 (issue was that I did not retur arr so result kept being undefined)
function reverseArray2(array) {
    const arr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i])
    }
    return arr;
}

// Working solution #3
function reverseArray3(array) {
    let arr = array.reverse();
    return arr;
}

// Non working solution #4 (I think there is potential but can't get it to work)
function reverseArray4(array) {
    for (i = 0; i < array.length; i++) {
        array = array.unshift(array.pop());
    }
    return array;
}


// array.unshift(array.pop());

console.log(reverseArray1(test));
console.log(reverseArray2(test));
console.log(reverseArray3(test));
console.log(reverseArray4(test));