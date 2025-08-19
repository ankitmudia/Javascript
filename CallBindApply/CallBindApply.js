// What is call and how it used

/* The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an object as an argument (parameter). */

const obj = {
    name: "Ankit"
}

function sayHello() {
    return `Hello ${this.name}!`
}

console.log(sayHello()); // Hello Undefined!
console.log(sayHello.call(obj)); // Hello Ankit!

// Sending arguments with call
const obj1 = {
    name: "Ankit"
}
function sayHello1(str) {
    return `Hello ${this.name}, ${str}`;
}
console.log(sayHello1.call(obj1, "How are you?")); // Hello Ankit, How are you?

// What is Apply?

/* Apply works same as call, only difference is that, it takes arguments in the form of an array, if not given, it will throw error */

const obj2 = {
    name: "Ankit"
}
function sayHello2(param1, param2) {
    return `Hello ${this.name}, ${param1}, ${param2}`
}
console.log(sayHello2.apply(obj2, ["How are you", "?"]));

// What is bind?
/* What bind does is that it provides us with a function, that we can us later */

const obj3 = {
    name: "Ankit Mudia"
}
function sayHello3(param1, param2) {
    return `Hello, ${this.name} ${param1} ${param2}`
}
const bindFunc = sayHello3.bind(obj3);
console.log(bindFunc("Software", "Engineer"));
console.log(bindFunc("28", "5'9"));

// Question: call with function inside obj, what will be the output

const age = 10;
const person = {
    name: "Ankit",
    age: 20,
    getAge: function () {
        return this.age;
    }
}
const person2 = {age: 28}
console.log(person.getAge.call(person2)); // this will print 28 as getAge will not have person2 object

// Question: What will be the output
// This will work fine in browser
const status = "First!";

setTimeout(function (params) {
    const status = "Second!"

    const data = {
        status: "Third!",
        getStatus() {
            return this.status
        }
    }

    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
}, 0);