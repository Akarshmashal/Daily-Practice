//chatAt()

var str = "Hello World"
console.log(str.charAt(6))
console.log(str.charAt(8))

//toLowerCase()

var str = "HELLO WORLD"
console.log(str.toLowerCase())

//toUpperCase()

var str = "hello world"
console.log(str.toUpperCase())


//slice()

var str = "hello world"
console.log(str.slice(3))
console.log(str.slice(4, 7))
console.log(str.slice(-2))

//substring()

var str="hello world"
console.log(str.substring(2))
console.log(str.substring(-2))//as it is

//replace()

var str="hello world"
console.log(str)
console.log(str.replace("hello","hii"))

var str="hello hello world"
console.log(str)
console.log(str.replace("hello","hii"))

//replaceAll

var str="hello hello world"
console.log(str)
console.log(str.replaceAll("hello","hii"))


//trim()

var str="       hello world          "
console.log(str+"welcome")
console.log(str.trim()+ " welcome")


//concat()

var str="hello"
var str1=" world"
console.log(str.concat(str1))

