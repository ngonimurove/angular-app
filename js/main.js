// alert('hello javascript')

// how to log messages to the console
// console.log('console message')

// DATA TYPES
//================
var myString = 'this is a string';
var myNumber = 5.3

var myArray = ['She said "this"', "this isn't", [["inside"],2,1], 'last element']
// get last element of an array: myArray[myArray.length - 1]
// access array within an array: myArray[2][1]

var myObject = {
	key1: 'this is the value',
	anotherKey: [1,2,3,4]
}

// myObject.anotherKey[3] === 4

// FUNCTIONS
//================
var myFunction = function(arg){
	return 'argument is ' + arg
}

// console.log('The function returns: ' + myFunction('foo'))

var addTwo = function(a, b){
	var num1 = parseInt(a)
	var num2 = parseInt(b)
	return num1 + num2
}

// var inputA = prompt('enter a number!')
// var inputB = prompt('enter another number!')

// alert('The answer to ' + 
// 		inputA + ' + ' + 
// 		inputB + ' = ' + 
// 		addTwo(inputA, inputB))


