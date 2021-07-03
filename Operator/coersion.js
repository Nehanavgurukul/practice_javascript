//Q.1 what is coercion ?
//Ans=>Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on)


console.log(true + false  * 5)  //1
// except + ,All arithmetics operator  will autometice convert like a simple behave 
console.log(12 / "6")  //2

console.log(true + false  + "5") // 15
console.log(true * "5" + false)  // 5  

console.log("number" + 15 + 3)  //number153
console.log(15 + 3 + "number")   //18number


console.log([1] > null)                  // true
console.log("foo" + + "bar")            // NaN

console.log('true' == true)             // false
console.log(false == 'false')           // false

console.log(null == '')                 // false
console.log(!"false" == !"true")        // true

console.log(["x"] == "x")               //true
console.log([] + null + 1)              //null1

console.log([1,2,3] == [1,2,3])        //false
console.log(null == 0)                 // false

