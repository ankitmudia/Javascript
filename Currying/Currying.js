// Currying is a technique in JS where we transform a function taking multiple 
// arguments into a sequence of functions, where each function takes only 1 argument

// sum(2)(6)(1) // output should be 9


function sum(param1) {
    return function (param2) {
        return function (param3) {
            console.log(param1+param2+param3);
        }
    }
};

sum(2)(6)(1);