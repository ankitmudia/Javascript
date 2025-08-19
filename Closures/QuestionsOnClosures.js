// Question 1: what will be the output

let count = 0;

(function printCount() {
    if(count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);    
})();


// Question 2: Write a function that will allow you to do so:

// var addSix = createFunc(6);
// addSix(15); // 21
// addSix(21); // 27


function createFunc(first) {
    return function addSix(second) {
        console.log(first+second);
    }
}

var addSix = createFunc(6);
addSix(15); // 21
addSix(21); // 27


// Question 3: Time optimzation using closures

function find() {
    let arr = [];
    for(let i=0;i<1000000;i++) {
        arr[i] = i*i;
    }

    return function (num) {
        console.log(arr[num]);
    }
}
const getFind = find();

console.time("6");
getFind(6);
console.timeEnd("6");

console.time("50");
getFind(50);
console.timeEnd("50");
