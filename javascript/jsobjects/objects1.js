person =
{
    name: "virat",
    age: 35,
    gender: "male",
    address:
    {
        state: "Maharastra",
        city: "Mumbai",
        pin: 123456,
        area:
        {
            main: "1st main",
            cross: "4th cross",
            doorno: 80
        }
    }
}
console.log(person)


//how to add function to object

var person =
{
    name: "virat",
    age: 35,
    city: "Mumbai",
    play: function () {
        console.log(this.name + "is playing cricket")
    }
}
console.log(person.play())//come with undefined 
person.play()

//How to retrive only keys form object
console.log(Object.keys(person))
//or
var keys = Object.keys(person)
console.log(keys)

var keys = Object.values(person)
console.log(keys)