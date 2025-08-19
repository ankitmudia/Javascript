/* What is this keyword in JS */

/* This keyword in JS is the defined as the reference to the current object which is being executed */
/* When this is used outside of any function, it points to the global/window object */

// 1. In an Object Method:
// When this is used inside a method of an object, it refers to that object.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Output: John Doe

// 2. In a Constructor Function:
// When a function is used as a constructor with the new keyword, this refers to the newly created instance of the object.
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.make); // Output: Toyota

// 3. In a Regular Function (Non-Strict Mode):
// In non-strict mode, when a regular function is called directly (not as a method of an object or a constructor), this refers to the global object (e.g., window in browsers, global in Node.js).
function showGlobalThis() {
  console.log(this);
}

showGlobalThis(); // Output: Window object (in a browser environment)


/* Let us practice some famous questions of this keyword */
// Question 1:

const user = {
    firstName: "Ankit",
    getName() {
        const firstName = "Ankit Mudia";
        return this.firstName;        
    }
}

console.log(user.getName()); // Output will be "Ankit" as this keyword will refer to the current object being executed

// Question 2: what is the result of accessing ref and why?

function makeUser() {
    return {
        name: "Ankit",
        ref: this
    }
}

const user1 = makeUser();
console.log(user1.ref.name);
/* The above will print undefine because, this at the time was pointing to window object
and there is no name property in the window object 

There could be a follow up question, how to fix this.

Ans: by making ref a function, then this inside it will point to its parents object which has name property
*/

function makeUser2() {
    return {
        name: "Ankit",
        ref() {
            return this
        }
    }
}
const user2 = makeUser2();
console.log(user2.ref().name);


// Question 3: what will be the output of this code

const user3 = {
    name: "Ankit Mudia!",
    logMessage () {
        console.log(this.name);
    }
};
setTimeout(user3.logMessage, 1000);
/* The above code will print undefined as user3.logMessage is a callback rather than a method, so 
user3 object does not exists after 1 second and name is not present in global object so it will print undefine */

// follow up question, how to fix it to print name

setTimeout(function (params) {
    user3.logMessage();
}, 1000);

// Question 4: what will be the output

const user4 = {
    name: "Ankit Mudiaaaa!",
    greet() {
        console.log(`Hello, ${this.name}`);
    },
    farewell: () => {
        console.log(`farewell, ${this.name}`)
    }
}
user4.greet();
user4.farewell();

// Question 5: Write code to make object calculator

/* const calcObj = {
    read() {
        this.a = Number(prompt("a = ", 0));
        this.b = Number(prompt("b = ", 0));
    },
    sum() {
        return this.a+this.b;
    },
    multiply() {
        return this.a*this.b;
    }
};
calcObj.read();
calcObj.sum();
calcObj.multiply(); */

// I have commented out this code as, prompt will not work by running node filename.js,
// we need browser to run this code

// Question 6: What will be the output of the following code

/*
const length = 4;
function callback() {
    console.log(this.length);
}

const obj3 = {
    length: 5,
    method (fn) {
        fn();
    }
};
obj3.method(callback); */
// output will be 4 as when fn() runs, it point to global not objects length
// Note: this will work in browser not in nodejs as this is window in browser and global in node,
// and length won't be present in global, Commented the above function

// Question 7: This is very important, Guess the output

/*
const length = 4;

function callback() {
    console.log(this.length);
}

const obj3 = {
    length: 5,
    method () {
        arguments[0]
    }
};

obj3.method(callback);
*/

// Output to the above will be, 1 as, arguments itself consists a property known as length, and 
// the current length of the array is 1, so it prints 1

// Question 8: Implement the following:
const calc = {
    total: 0,
    add(a) {
        this.total+=a;
        return calc;
    },
    multiply(a) {
        this.total *= a;
        return calc;
    },
    subtract(a) {
        this.total -= a;
        return calc;
    }
}


const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

