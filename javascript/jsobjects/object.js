//Object literal

let person =
{
    name: "Virat",
    age: 35,
    gender: "male",
    city: "Delhi"
}
console.log(person)

//Object constructor

var car = new Object()
car.name = "BMW";
car.model = 2023;
car.color = "Nardo grey"
console.log(car)


//Example for literal object

let product =
{
    productname: "samsung",
    prize: 120000,
    category: "electronic",
    rating: 5,
    stock: true,

}
console.log(product)
// console.log(product.productname)//EXAMPLE FOR RETRIVING OR ACCESSING SPECIFIC PROPERTIE OR KEYVALUE.
// console.log(product.rating)//EXAMPLE FOR RETRIVING OR ACCESSING SPECIFIC PROPERTIE OR KEYVALUE.
// console.log(product[`category`])//EXAMPLE FOR RETRIVING OR ACCESSING SPECIFIC PROPERTIE OR KEYVALUE.

//example to update and modify
product.productname = "Redmi note 5 pro"
product.rating = 4.5


//example to insert or add property inside pbject
product.brand = "MI"
product.storage = "120gb"
console.log(product)


//Example to delete property of object

delete product.brand
delete product.rating
console.log(product)


