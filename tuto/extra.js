// function callsum (getsum){
// 	// console.log(getsum);
// 	console.log(getsum(5,9));

// }
// callsum(function(p1,p2){
// 	return p1*p2;
// })

// function greet(callback) {
//   callback('peter');
//   console.log('I am callback function');                                         
// }

// // callback function
// greet(function (name,callMe) {
//   console.log('Hi' + ' ' + name);                                                
// })





// function processUserInput(callback) {
// 	var name = "jaldip"
// 	callback(name);
//   }

//   processUserInput(function(name) {
// 	console.log('Hello ' + name);
//   })
  
// //   processUserInput(greeting);

// function greeting(name) {
// 	alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
// 	var name = prompt('Please enter your name.');
// 	callback(name);
//   }
  
//   processUserInput(greeting);

  // function firstfun(){
	//   console.log("call first...")
  // }
//   function secondfun(para1){
//     para1()
//     console.log("call second...")

// }
// // secondfun(firstfun);
// // secondfun(()=>console.log("call first..."))
// secondfun(function(){
//   console.log("call first...")
// })

// // function
// function greet(name, callback) {
//   console.log('Hi' + ' ' + name);
//   callback();
// }

// callback function
// function callMe() {
//   console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// // function
// function greet(name, callback) {
//   console.log('Hi' + ' ' + name);                                                
//   callback();
// }

// // callback function
// greet(function ('peter') {
//   console.log('I am callback function');                                         
// })

// passing function as an argument
// greet('Peter', callMe);

// function firstfun(callfun){
//   console.log("call first...")
//   callfun(7)
// }
// firstfun(function(para1){
// console.log("call second..."+para1);
// })
// secondfun(firstfun);

// function greet() {
//   console.log('Hello world');
// }

// function sayName(name) {
//   console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 3000);
// sayName('John');

// Callback Function Example
// function greet(name, myFunction) {
//   console.log('Hello world');

//   // callback function
//   // executed only after the greet() is executed
//   myFunction(name);
// }

// // callback function
// function sayName(name) {
//   console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 3000, 'John', sayName);


const a = {
  prop1: 10,
  prop2: 9
}

// It is allowed
a.prop1 = 3         //{prop1: 3,prop2: 9}


// It is not allowed
a = {
  b: 10,
  prop2: 9
}
// console.log(a)
