// QS- 1
// a)

// const value1 = "5"
// const value2 = 9;
// let sum = value1 + value2;
// console.log(sum) 
//  59 - here performs concatenation instead addition between string and number

// b)

// const value1 = "5";
// const value2 = 9;
// let sum = Number(value1) + value2;

// console.log(sum) 
//14 - Number() func used to explicitily convert string ("5") to number ,

// c)

// console.log(![]);
//  false - empty array is true, then ! makes it false,

// console.log([] == ![]);
// true - here type coercion will happened , both side stringof boolean  will compare and it comes true
// console.log([] === ![]);
// false - equality comparison without type coercion ,due to string of diffrent boolean type
// console.log(null == false);console.log(null == true);
// bothe are false  - null represents the absence of a value, it doesn't consider true or false

// d)

// console.log(-"giddyup" + 409)
// NaN- here - attempts to convert the string "giddyup" into a number, then fails to add 





// QS - 2

// let myVar_1 = 10 ; console.log(myVar_1);
// 10 - String
// let myVar_2 = 10.5 + ' '; console.log(myVar_2);
// 10.5 - String
// let myVar_3 = -10.5 + ''; console.log(myVar_3);
// -10.5 - String
// let myVar_4 = true + ''; console.log(myVar_4);
// true - String



// QS - 14

// a)

// function doSomething() {
//     console.log(this);
// }
// doSomething();

// window

// b)

// var obj = {
//     name:"vivek",
//     getName: function () {
//         console.log(this.name);
//     }}
// obj.getName();
// vivek


// c)

//     var obj = {
//         name: "vivek",
//         getName:
//             function () { console.log(this.name); }
//     }
// var getName = obj.getName;
//     var obj2 = { name: "akshay", getName };
//     obj2.getName();
//akshay

// d)

// var obj1 = {
//     address: "Mumbai,India",
//     getAddress: function () {
//         console.log(this.address);
//     }
// }
// var getAddress = obj1.getAddress;
// var obj2 = { name: "akshay" };
// obj2.getAddress();

// script.js:97 Uncaught TypeError: obj2.getAddress is not a function

// // QS - 16 

// // call
// Function.prototype.myCall = function(context, ...args) {

//     const uniqueID = 'myCall_' + Math.floor(Math.random() * 1000);
//     context[uniqueID] = this; 

//     const result = context[uniqueID](...args); 

//     delete context[uniqueID]; 

//     return result; 
//   };

//   function greet(message) {
//     console.log(`${message}, ${this.name}!`);
//   }

//   const person = { name: 'devs' };
//   greet.myCall(person, 'Hello');

// // apply

// Function.prototype.myApply = function(context, argsArray) {

//     const uniqueID = Symbol()
//     context[uniqueID] = this

//     const result = context[uniqueID](...argsArray)

//     delete context[uniqueID]

//     return result
//   };

//   function sum(a, b) {
//     return this.value + a + b;
//   }

//   const calculator = { value: 10 };
//   const args = [5, 7];
//   const result = sum.myApply(calculator, args);

//   console.log(result); 

// //bind 

// Function.prototype.myBind = function (context, ...args) {
//     const originalFunction = this;

//     return function (...newArgs) {
//         return originalFunction.apply(context, [...args, ...newArgs]);
//     };
// };

// function product(a, b, c) {
//     return this.value * a * b * c;
// }

// const multiplier = { value: 2 };
// const multiplyByTwo = product.myBind(multiplier, 2);

// const result = multiplyByTwo(3, 4);
// console.log(result);

// // QS - 21

// // a)

// function real() {
//     console.log("I am real. Always run me");
// }
// function real() { console.log("No I am real one "); }
// real();

// function real() {
//     console.log("You both are wasted");
// }

// You both are wasted

// b)

// var b = 1;
// function outer() {
//     var b = 2;
//     function inner() {
//         b++;
//         console.log(b);
//         var b =
//             console.log(b);
//     }
//     inner();
// }
// outer()

// NaN

// c)

// var d = 1; function test() {
//     d = "2"; console.log(typeof d);
//     function d() { }
// }
// test()
// console.log(typeof d)

// string
// number


// asynctask runs parellel in 
async function processTaskA() {
    return new Promise(resolve => setTimeout(() => resolve('Task A completed'), 1200));
  }
  
  async function processTaskB() {
    return new Promise(resolve => setTimeout(() => resolve('Task B completed'), 800));
  }
  
  async function processTaskC() {
    return new Promise(resolve => setTimeout(() => resolve('Task C completed'), 1500));
  }
  
  async function runParallelTasks() {
    try {
      const [resultA, resultB, resultC] = await Promise.all([processTaskA(), processTaskB(), processTaskC()]);
      console.log(resultA);
      console.log(resultB);
      console.log(resultC);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  runParallelTasks();