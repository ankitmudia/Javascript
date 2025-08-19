/* Objects in JS is a collection of key value pair which is used for storing Data */

const user = {
    firstName: "Ankit",
    age: 28
};

/* Accessing properties of objects */
console.log(user.firstName, user.age);


/* Modifying properties of objects */
user.firstName = "Ankit Mudia";
console.log(user);

/* Deleting properties of object */
delete user.age;
console.log(user);

// Let us practice some questions -


// 1.
/* Question to consufe if this function will return a or return error/undefined */
(function (a) {
    delete a;
    return a;
}(5));
/* This will return a as 5 as delete deletes property only from an object not any local variable */

// 2.
/* What will the output */
const obj = {
    a: "first",
    b: "second",
    a: "third"
};
console.log(obj);
/* Answer - { a: 'third', b: 'second' } will be the output as a is again defined an it will override the previous a */

// 3. How to loop through the objects for keys and properties
const obj1 = {
    name: "Ankit",
    age: 28
};

for(key in obj1) {
    console.log(`key is ${key} and value is ${obj1[key]}`);
}

/* 4. Create a function that multiplies all the numeric values of an object by 2 */

const obj2 = {
    a: 100,
    b: 200,
    c: "My nums"
};
function multiBy2(obj) {
  for(key in obj) {
    if(typeof(obj[key]) === "number") {
        obj[key] *= 2;
    }
  }  
};
multiBy2(obj2);
console.log(obj2);

// 5. Important output based question

const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);
/* We must be thinking that the output will be 123 but it is 456 because
when we assigned a[b], it is formed [object object] and for a[c], [object object]
and when we consoled a[b], we consoled, a[object object], at last we pushed 456 in it.
*/

// 6. JSON stringify and JSON parse.

// 7. spread operator

console.log([..."ankit"]); // this will spread all the characters of the string like->  [ 'a', 'n', 'k', 'i', 't' ]
