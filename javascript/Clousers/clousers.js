function Outer() {
    var city = "Vijayapur"
    console.log("Outer Function " + city)
    function inner() {
        console.log("Inner Function " + city)
    }
    return inner()
}
Outer()

//parametrs

function Outer1() {
    var c = 10;
    function Inner1(a, b) {
        var add = a + b + c
        console.log(add)
    }
    return Inner1
}
var result = Outer1()
result(10, 20)