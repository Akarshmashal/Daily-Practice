//forEach()

var arr=["raj",100,"Virat",true]
arr.forEach(function(ele,index)
{
    console.log(ele+"  Index value is "+index)
})
console.log(arr)

//Map()

var mmm=[101,300,20,155,600]
var newarray=mmm.map((element)=>{
    return element*50
})
console.log(newarray)
console.log(mmm)


//Filter()

var arr=[101,300,20,155,600]

var newarray=arr.filter(function(element)
{
  return element>200
})
console.log(newarray)
console.log(arr)


//Sort()

var str=["Rohit","Gill","Virat","Iyer","Sky","Dubey","Yuzi"]
console.log(str)
console.log(str.sort())


var nnn=[10,5,89,52,3,4,6]
var res=nnn.sort((a,b)=>
{
    return b-a  //for ascending a-b
})
console.log(res)
