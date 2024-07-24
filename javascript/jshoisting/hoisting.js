var a = 10;
console.log(a)

//BY seeing above example we conclude that we can't domvariable hoisting in js
//in js we can hoist only function declaration we cannot hoist function expression.

sayHello()
function sayHello()
{
    console.log("Ram Ram Bhaiooo")
}


var res=(a,b)=>{
    return a+b
}
console.log(res(20,80))