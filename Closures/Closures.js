// What is Closure

// when a function has access to it's parents lexical scope,
// even when the parent functions have finished execution.
// It is known as closures.

// Example of closures:

function makeFunc() {
  var name = "Ankit";
  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();

// Look at the above implementation carefully, even when makeFunc has returned, display name has
// access to its parent's variable(name). This is known as closures.

// Doing 

// var myFunc = makeFunc();
// myFunc();

//  is same as

// makeFunc()();
