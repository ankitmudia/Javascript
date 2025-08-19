// Map in JS
const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const newArray = array.map((item, index, arr) => {
  return item + 1;
});

console.log("Map Function: ", newArray);

// Let us write Polyfill for Map

// let us understand Map first, it is used to iterate over arrays in JS
// and returns a new Array as seen above.
// it takes a function inside it, and inside that function, it takes 3 things
// item, index, and original array on which we are traversing.

// Let us try to write a polyfill using Array.prototype

Array.prototype.ankitImplementationForMap = function (cb) {
  // Map function returns and array so create an empty array
  let temp = [];

  // iterate over the array
  for (let i = 0; i < this.length; i++) {
    // as seen in map function, it takes a callback function and callback takes 3 things,
    // item, index and original array
    temp.push(cb(this[i], i, this));
  }

  // return array
  return temp;
};

const newMyArray = array.ankitImplementationForMap((item, index, arr) => {
    return item*2;
})

console.log("Polyfill: ", newMyArray);