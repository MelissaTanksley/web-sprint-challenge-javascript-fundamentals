// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//Because of closure, all variables in a parent function can be accessed by its child (nested function).


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function mySummation(num) {
  return 1 + 2 + 3 + 4 + 5; // 15
  }
console.log (mySummation);
  

/*
1. Briefly compare and contrast .forEach & .map (2-3 sentences max)
forEach() calls a callback function once. This is for each array element, in order.
.map is less rigid than forEach(). It creates new arrays and returns a new array of elements. It also calls back each element and returns each.
2. Explain the difference between a callback and a higher order function.
Callback - the ability to pass on functions and call them outside the inner functions. Callback utilizes ‘()’. They help make sure a function does not run before other functions are completed.
Higher order functions also accepts and returns functions with less rigidity than a callback. 
3. What is closure?
They give the developer access to outer function scopes from an inner function. They are like scope in that the variables in the parent function are available to the child function of the parent function.
4. Describe the four rules of the 'this' keyword.
‘This’ refers to a global project vs. a simple function call. It also refers to an object that can be invoked. The four rules (Global Binding, Implicit Binding, New Binding, and Explicit Binding) are also known as principles.
Global: when in the global scope, the values of “this” will be in the window/console.

Implicit: whenever a function is called by a preceding dot, the object left of the dot  gets “this”.
New: whenever a constrictor function is used, “this” refers to the specific instance of the object that is created and returned by the constructor function.
Explicit: whenever Javascript’s call/apply method is used, “this” is explicitly defined.
5. Why do we need super() in an extended class?
A parent class used to call/invoke a constructor within the class and access the parent’s properties, methods, etc., accessing both methods and properties on parent objects.
*/
