//Named Function
function add() {
    var num1 = 60
    var num2 = 30
    console.log(num1 + num2)
}
add()

//Parameterized function
function details(name, age, team) {
    console.log(name)
    console.log(age)
    console.log(team)
}
details("Viart", 35, "RCB")

function add(x, y) {
    var result = x + y;
    console.log(result)
}
add(20, 30)
add(20, "r")//20r

//Return funtion:-function which as return statement

function wish() {
    return "Hellooooo Bhai"
}
var res = wish()
console.log(res)
//or
console.log(wish())

//parameterized return function

function add(x, y) {
    var result = x + y
    return result
}
var res = add(10, 10)
console.log(res)

//
function sub() {
    var a = 20;
    let b = 10;
    var res = a - b
    return res
    console.log("afk")
}
console.log(sub())

//Anonymous function:-function without name calling by using function expression(var greet)

var greet = function () {
    console.log("mister india")
}
greet()

let deatils = function (name, age, city) {
    console.log(name)
    console.log(age)
    console.log(city)
}
deatils("virat", 35, "delhi")

//return anonymous function examples

var name = function () {
    res = ("named anonymous function")
    return res
}
console.log(name())

//callback and higher order functions


function print() {
    console.log("welcome to js class")
}
function add(x, y) {
    var res = x + y
    console.log(res)
}
function fun(f) {
    f()
    // console.log(f)
}
// fun(print())
// fun(add(10,10))
fun(function () {
    var city = "vijayapur"
    console.log(city)
}
)

//Arrow function
let greet1 = () => {
    console.log("hello duniya")
}
greet1()

var add = () => console.log(10 + 50)
add()

//arrow as parameter

var info = (name, age, city) => {
    console.log(name)
    console.log(age)
    console.log(city)
}
info("virat", 35, "Delhi")

//arrow as return

var wish = () => {
    return "gracias"
}
var res = wish()
console.log(res)
//you can directly return
console.log(wish())

    //Immediately invoke function expression(IIFE's)

    (function () {
        console.log("hello");
    })();



// (function(name, age) {
//     console.log(`${name} ${age}`);
//     console.log(name);
//     console.log(age);
// })('virat', 35);


//Async Function

async function fetchData() {
    let response = await fetch('https://api.example.com/data')
    let data = await response.json()
    console.log(data)
}
fetchData()