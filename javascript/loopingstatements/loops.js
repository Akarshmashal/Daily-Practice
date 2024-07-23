//For loop
/*
Syntax

for(initialize;check Condition;increment/decrement)
{
    //set of code
}*/

for(var i=0;i<=10;i++)
{
    console.log("Number is ",i)
}

//while loop

/*
syntax
while(condition)
{
    //set of code
    increment/decrement
}
 */

var counter=0

while(counter<10)
{
    console.log("counter value is "+counter)
    counter++
}

//DO WHILE LOOP


/*
Syntax
do{
    //set for code
}
while(condition)
*/

var count=0
do
{
    console.log("count is "+count)
    count++
}
while(count<10)


//for in loop

var obj=
{
    name:"virat",
    age:35,
    city:"delhi"
}
for(var x in obj)
{
    console.log(x)
    console.log(obj[x])
}

//for of loop

var arr=[10,40,66,92,81,22]

for(var ele of arr)
{
    console.log(ele)
}
console.log("*************")

//plane for loop

for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}






