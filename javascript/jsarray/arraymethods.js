//Push()
var arr=[]
arr.push(10)
arr.push("virat")
arr.push('y')
arr.push(100)
console.log(arr)

//pop()

var arr = ["Akarsh", 100, 30.6, true, { name: "virat", id: 18 }, false]
console.log(arr)
arr.pop()
console.log(arr)

//Unshift()

var arr = ["Akarsh", 100, 30.6, true, false]
console.log(arr)
arr.unshift("Virat")
console.log(arr)
arr.unshift(18)
console.log(arr)

//Shift()

var arrr = [10,"Akarsh", 100, 30.6, true, false]
console.log(arrr)
arrr.shift()
console.log(arrr)

//Indexof()

var a = ["Akarsh", 100, 30.6, true, false]
console.log(a.indexOf(100))
console.log(a.indexOf("Akarsh"))

//Lastindexof()

var aa = ["Akarsh", 100, 30.6, true, false,100]
console.log(aa.indexOf(100))
console.log(aa.lastIndexOf(100))

//Join()

var xyz = ["Akarsh", 100, 30.6, true, false]
console.log(xyz)
console.log(xyz.join())
console.log(xyz.join(' '))
console.log(xyz.join('$'))

//Include()

var asd = ["Akarsh", 100, 30.6, true, false]
console.log(asd.includes("Akarsh"))//true
console.log(asd.includes(55))//false

//reverse()

var rr = ["Akarsh", 100, 30.6, true, false]
console.log(rr)
console.log(rr.reverse())


//Slice()

var slll=[10,"akarsh",true,5254.0022,'c',"asdfg"]
console.log(slll.slice(1))
console.log(slll.slice(2,5))
console.log(slll)


//Splice()

var sp=[1,2,3,4,5,6,7,8,9]
console.log("Original array before Splice" +sp)
var Sp1=sp.splice(3,6)
console.log("Array after Splice" +Sp1)
console.log(sp)

