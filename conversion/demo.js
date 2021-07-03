//conver sion is a process to change one data type to onather data type 
//1.FOR ONLY NUMBER 
// 1.Number to String =>>>>>
// var a = 8
// console.log(String(a))         //will change into string  8


//2. Number to null
// var a = 8
// console.log(null(a))              //null is not a function


//3.Number to undefined 
// var a = 8
// console.log(undefined(a))            //undefined is not a function

//4.Number to bigint
// var a = 8
// console.log(BigInt(a))                                   // 8n

//5.Number to Boolean
// var a = 8
// console.log(Boolean(a))                                  //true


//6. Number to Symbol
// var a = 8
// console.log(Symbol(a))                                   //Symbol(8)


//2.FOR ONLY STRING
//1.String to Number
// var a = "hi";
// console.log(Number(a))                                   //NaN

// var a = "32";
// console.log(Number(a))                                    //32

//2.String to null
// var a = "hi";
// console.log(null(a))                                     //null is not a function

//3.String to undefined
// var a = "hi";
// console.log(undefined(a))                                   //undefined is not a function    

//4. String to Boolean
// var a = "hi";
// console.log(Boolean(a))                                       // true

//5. String to BigInt
// var a = "hi";
// console.log(BigInt(a))                                           //Cannot convert hi to a BigInt
// var a = "56";
// console.log(BigInt(a))                                             //56n

//6.String to Symbol
// var b = "hi"
// var a = "34";
// console.log(Symbol(a))                                               //Symbol(34)
// console.log(Symbol(b))                                               //Symbol(hi)

//3.FOR ONLY NULL
//1. null to Number
// var a = null;
// console.log(Number(a))                                                // 0

//2.null to String
// var a = null;
// console.log(String(a))                                                // null

//3.null to undefined
// var a = null;
// console.log(undefined(a))                                                //undefined is not a function

//4.null to Boolean
// var a = null;
// console.log(Boolean(a))                                                    // false

//5.null ot BigInt
// var a = null;
// console.log(BigInt(a))                                                       //Cannot convert null to a BigInt


//6.null to Symbol
// var a = null;
// console.log(Symbol(a))                                                         //Symbol(null)

//4.FOR ONLY UNDEFINED
//1.undefined to Number 
// var a = undefined
// console.log(Number(a))                                                           // NaN

//2.undefined to String
// var a = undefined
// console.log(String(a))                                                             // undefined

//3.undefined to null
// var a = undefined
// console.log(null(a))                                                                 //null is not a function

//4.undefined to Boolean
// var a = undefined
// console.log(Boolean(a))                                                                //false

//5.undefined to BigInt
// var a = undefined
// console.log(BigInt(a))                                                                  //Cannot convert undefined to a BigInt

//6.undefined to Symbol
// var a = undefined
// console.log(Symbol(a))                                                                    //Symbol()

//5.FOR ONLY BOOLEAN 
//1. Boolean to Number
// var a = true
// var b = false
// console.log(Number(a))                                                                       // 1
// console.log(Number(b))                                                                       // 0

//2.Boolean to String 
// var a = true
// var b = false
// console.log(String(a))                                                                       // true
// console.log(String(b))                                                                       // false


//3.Boolean to null
// var a = true
// var b = false
// console.log(null(a))                                                                       // null is not a function
// console.log(null(b))                                                                       // null is not a function

//4.Boolean to undefined
// var a = true
// var b = false
// console.log(undefined(a))                                                                       // undefined  is not a function
// console.log(undefined(b))                                                                       // undefined  is not a function


//5.Boolean to BigInt
// var a = true
// var b = false
// console.log(BigInt(a))                                                                       // 1n
// console.log(BigInt(b))                                                                       // 0n


//6.Boolean to Symbol
// var a = true
// var b = false
// console.log(Symbol(a))                                                                       // Symbol(true)
// console.log(Symbol(b))                                                                       // Symbol(false)


//6.FOR ONLY BIGINT
//1. BigInt to Number
// var a = 8n
// console.log(Number(a))                                                                         // 8


//2.BigInt to String
// var a = 8n
// console.log(String(a))                                                                            // 8


//3.BigInt to null
// var a = 8n
// console.log(null(a))                                                                            // null is not a function

//4. BigInt to undefined 
// var a = 8n
// console.log(undefined(a))                                                                      // undefined is not a function


// 5. BigInt to Boolean
// var a = 8n
// console.log(Boolean(a))                                                                       //true

// 6. BigInt to Symbol
// var a = 8n
// console.log(Symbol(a))                                                                          // Symbol(8)


//7.FOR ONLY Symbol
//1. Symbol to Number
// var a = Symbol(4)
// console.log(Number(a))                                                                             //Cannot convert a Symbol value to a number

//2.Symbol to String
// var a = Symbol(4)
// console.log(String(a))                                                                               //Symbol(4)


//3. Symbol to null
// var a = Symbol(4)
// console.log(null(a))                                                                               //null is not a function

// 4.Symbol to undefined
// var a = Symbol(4)
// console.log(undefined(a))                                                                          //undefined is not a function


//5.Symbol to Boolean
// var a = Symbol(4)
// console.log(Boolean(a))                                                                            //true

//6. Symbol to BigInt 
// var a = Symbol(4)
// console.log(BigInt(a))                                                                               //Cannot convert Symbol(4) to a BigInt

//Q.1 what is initialize ?
//Ans=> Initializing a variable means specifying an initial value to assign to it .

//Q.2 what is initialization?
//Ans=>Initialization is the means of assigning an initial value to a variable.

//Q.3 How do you initialize a function in JavaScript?
//Ans=>JavaScript objects can be initialized in various ways which are as follows.
//1.Using object literals.
//2.Using new Object() method.
//3.Using Object.create() method.
//4.Using constructor functions.




/*
Three types of conversion
The first rule to know is there are only three types of conversion in JavaScript:

to string
to boolean
to number
*/

