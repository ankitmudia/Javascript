// Reduce
const array = [1, 2, 3, 4, 5];

const newArray = array.reduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log("Sum Using Reduce: ", newArray);

// Let us write Polyfil for reduce
// Reduce is an array method in JS, which reduces the array to a single value,
// based on the condition added in its callback.

Array.prototype.ankitImplementationForReduce = function (
  callback, // callback function
  initialAccumulator // initialAccumulator
) {
  // setting accumulator;
  var acc = initialAccumulator;

  // iterate the array
  for (let i = 0; i < this.length; i++) {
    // if nothing is present in the accumulator, then this[i], meaning, first element
    // of the array will be initial accumulator
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }

  // return accumulator
  return acc;
};

const newArrayForPolyfill = array.ankitImplementationForReduce(
  (acc, curr, index, arr) => {
    return acc + curr;
  },
  0
);

console.log("Sum using Reduce Polyfill: ", newArrayForPolyfill);

console.log("===========================================================================");

const newAnkitArray = [1, 2, 3, 4, 5];

const reducedNewAnkitArray = newAnkitArray.reduce((acc, curr, index, arr) => {
  return acc+curr;
})

console.log(reducedNewAnkitArray);

Array.prototype.reducedNewAnkitArrayPoly = function (cb, initialAccumulatorValue) {
  
  let result = initialAccumulatorValue;

  for(let i = 0;i<this.length;i++) {
    result = result ? cb(result, this[i], i, this) : this[i];
  }

  return result;
}
const resultOfPoly = newAnkitArray.reducedNewAnkitArrayPoly((acc, curr, index, arr) => {
  return acc+curr;
}, 0)
console.log(resultOfPoly)