// Filter
const array = [1, 2, 3, 4, 5];
const newArray = array.filter((item, index, arr) => {
  return item > 2;
});
console.log("Filter: ", newArray);

// Let us write our own polyfill for Filter.
// Filter takes a callback function and inside it, it takes three things,
// item, index and original array.

// Polyfill for filter
Array.prototype.ankitImplementationForFilter = function (callback) {
  // creating an empty array which will be return after pushing in the result in it
  let temp = [];

  // iterating over array
  for (let i = 0; i < this.length; i++) {
    // if the callback which is passed satifies condition, then add item to array
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  // return array
  return temp;
};

// call polyfill of Filter
const polyResult = array.ankitImplementationForFilter((item, index, array) => {
  return item > 2;
});

console.log("Polyfill: ", polyResult);
