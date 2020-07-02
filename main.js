// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']

// This is one example of implementing the functionality of forEach:
function newForEach(array, callback) {
    for (let index = 0; index < array.length; index = index + 1) {
        let currentItem = array[index]
        callback(currentItem, index, array)
    }
}

let oneTwoThree = [1, 2, 3, 4];
let allEvenArray = [4, 6, 8, 10];
let allOddArray = [3, 7, 9, 13];

function isEven(number) {
    return number % 2 === 0
}


function newSome(array, callback) {
    let result = false
    for (let index = 0; index < array.length; index = index + 1) {
        let currentElement = array[index];
        let callbackResult = callback(currentElement);
        if (callbackResult === true) {
            result = true
            return result // optional
        }
    }
    return result
}

console.log("testing newSome");
console.log(newSome(oneTwoThree, isEven)) // true
console.log(newSome(allEvenArray, isEven)) // true
console.log(newSome(allOddArray, isEven)) // false
console.log("testing .some")
console.log(oneTwoThree.some(isEven))
console.log(allEvenArray.some(isEven))
console.log(allOddArray.some(isEven))

function newEvery(array, callback) {
    let result = true;
    for (let index = 0; index < array.length; index = index + 1) {
        let currentElement = array[index];
        let callbackResult = callback(currentElement);
        if (callbackResult === false) {
            result = false
            return result
        }

    }
    return result
}

console.log("testing newEvery");
console.log(newEvery(oneTwoThree, isEven)) // false
console.log(newEvery(allEvenArray, isEven)) // true
console.log(newEvery(allOddArray, isEven)) // false

function newFind(array, callback) {

    for (let index = 0; index < array.length; index = index + 1) {
        let currentElement = array[index];
        let callbackResult = callback(currentElement);
        if (callbackResult === true) {
            return currentElement;
        }
    }
    return undefined
}

// let oneTwoThree = [1,2,3,4]; /// expecting 2
// let allEvenArray = [4,6,8,10]; // expecting 4
// let allOddArray = [3,7,9,13]; // expecting undefinded

console.log("testing newFind");
console.log(newFind(oneTwoThree, isEven)) // 2
console.log(newFind(allEvenArray, isEven)) // 4
console.log(newFind(allOddArray, isEven)) // undefinded

// newFindIndex

function newFindIndex(array, callback) {

    for (let index = 0; index < array.length; index = index + 1) {
        let currentElement = array[index];
        let callbackResult = callback(currentElement);
        if (callbackResult === true) {
            return index;
        }
    }
    return -1
}

console.log("testing newFindIndex");
console.log(newFindIndex(oneTwoThree, isEven)) // 1
console.log(newFindIndex(allEvenArray, isEven)) // 0
console.log(newFindIndex(allOddArray, isEven)) // -1


// section for newMap

function timesTwo(number) {
    return number * 2;
}

function newMap(array, callback) {
    let resultArray = []

    for (let index = 0; index < array.length; index = index + 1) {
        let currentElement = array[index]
        let callbackResult = callback(currentElement);
        resultArray.push(callbackResult);
    }

    return resultArray
}

// let oneTwoThree = [1,2,3,4]; /// 
// let allEvenArray = [4,6,8,10]; /
// let allOddArray = [3,7,9,13]; //

console.log("testing newMap");
console.log(newMap(oneTwoThree, timesTwo)) // [2,4,6,8]
console.log(newMap(allEvenArray, timesTwo)) // [8,12,16,20]
console.log(newMap(allOddArray, timesTwo)) // [6,14,18,26]

// newFilter

// let oneTwoThree = [1,2,3,4]; /// [2,4]
// let allEvenArray = [4,6,8,10]; // [4,6,8,10]
// let allOddArray = [3,7,9,13]; // []

function newFilter(array, callback) {
    let resultArray = []

    for (let index = 0; index < array.length; index = index + 1) {
        let currentElement = array[index];
        let callbackResult = callback(currentElement);
        if (callbackResult === true) {
            resultArray.push(currentElement);
        }
    }

    return resultArray
}

console.log("testing newFilter");
console.log(newFilter(oneTwoThree, isEven)) // [2,4]
console.log(newFilter(allEvenArray, isEven)) // [4,6,8,10]
console.log(newFilter(allOddArray, isEven)) // []



