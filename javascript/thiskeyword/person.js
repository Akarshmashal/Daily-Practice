const person =
{
    fname: "Viart",
    lname: "Kohli",
    age: 35,
    place: "Delhi",
    details: function () {
        console.log(this.fname + " " + this.lname + " " + this.age + " " + this.place)
    }
}
person.details()

const person1 =
{
    fname: "Viart",
    lname: "Kohli",
    age: 35,
    place: "Delhi",
}
const person2 =
{
    fname: "KL",
    lname: "Rahul",
    age: 28,
    place: "Bengaluru",
}
function details(greeting) {
    console.log(greeting + " " + this.fname + " " + this.lname + " " + this.age + " " + this.place)
}
details.call(person1)//call function it is used only when there is few parameters
details.call(person2, "Heloooooooo")
details.apply(person1, ["Hello"])//it is used whne there is many parameters
details.apply(person2, ["hi welcome"])

let details2 = details(person1)//it returns new function
details2("hello")
