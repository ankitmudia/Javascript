// Round 2

// Question 1:
// what will be the output:

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

a();

// The output of the above will be 3 3 3, and will be printed after 1 second.
// Because, var is function scoped, and the same var value was updated in all three iterations,
// when setTimeout ran console after 1 second, the var i value was 3;

// Follow up: How to print the desired 0, 1, 2
// ANS: Using Let

function b() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
b();

// The above worked because let saved the declaration of i in Script, and create new instance for i;

// Follow up: If we have to use var only;
// Ans: As var is function scope, we will use closure to hold value of every new i;

function c() {
  for (var i = 0; i < 3; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}

c();

// The above worked because, we have wrapped the console inside closure, closure here is
// generating new function instances for every i; Hence it prints the desired output;

// Question 2:
// Make a counter in JS using Closure;

function Counter() {
  var count = 0;

  function add(num) {
    count += num;
  }

  function retrieve() {
    return count;
  }

  return { add, retrieve };
}

const counter = Counter();
counter.add(5);
counter.add(10);
console.log("Counter Current Value: ", counter.retrieve());
