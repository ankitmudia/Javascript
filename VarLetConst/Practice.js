// var, let and const

// intermeditate

var a = 1;
let b = 2;

{
  var a = 10;
  let b = 20;
  console.log(a); // ? 10
  console.log(b); // ? 20
}

console.log(a); // ? 10
console.log(b); // ? 2

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 1 2 3

function test() {
  console.log(foo); // ? undefined
  var foo = 5;
}
test();

function fun() {
  console.log(x); // ? no, this will throw error, cannot access x before initialization
  let x = 5;
}
fun();

const user = {
  name: "Ankit",
};

user.name = "Rahul";
console.log(user.name); // ? Rahul

{
  let x = 5;
  {
    console.log(x); // Error, cannot access x before initialization
    let x = 10;
  }
}

let count = 10;
{
  let count = 20;
  console.log(count); // ? 20
}
console.log(count); // ? 10

var x = 100;

function outer() {
  console.log(x); // ? undefined
  var x = 200;
}
outer();

// advanced

function foo() {
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
}
foo();

let a = 10;

(function () {
  console.log(a); // reference error, TDZ
  let a = 20;
})();

var a = 1;
function outer() {
  console.log(a); // undefined
  var a = 2;
}
outer();

function test() {
  console.log(typeof value); // ? undefined
  var value = "hello";
}
test();

function test() {
  if (false) {
    var x = 5;
  }
  console.log(x); // not defined
}
test();

function parent() {
  var x = 10;

  function child() {
    console.log(x); // 20
  }

  x = 20;
  return child;
}

const fn = parent();
fn();

var a = 10;

(function () {
  console.log(a); // undefined
  var a = 5;
})();

function hoistTest() {
  console.log(x); // not defined error
  {
    let x = 5;
  }
}
hoistTest();

for (var i = 0; i < 1; i++) {
  function foo() {
    console.log(i);
  }
}
foo(); // 2

var a = 100;

function test() {
  console.log(a); // undefined
  var a = 200;
  console.log(a); // 200
}

test();
console.log(a); // 100
