var person = {
    name: "virat",
    age: 35,
    city: "Delhi",
    gender: "Male"
}
//Old Approach
// var name = person.name
// var age = person.age
// var city = person.city
// var gender = person.gender
// console.log(name+" "+age+" "+city+" "+gender)

//New Approach
const{name,age,city,gender}=person
console.log(name+" "+age+" "+city+" "+gender)

//Array
//Old Approach
var arr=[10,20,30,40]
var ele1=arr[0]
var ele2=arr[1]
var ele3=arr[2]
var ele4=arr[3]
console.log(ele1+" "+ele2+" "+ele3)
console.log(ele1+ele2+ele3)

//New Approach
let[element1,element2,element3]=arr
console.log(element1+element2-element3)