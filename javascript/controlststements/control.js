// if

// syntax:
//     if(condition)
//     {
//         //set of statement
//     }

function FindEvenNumber(num)
{
    if(num%2==0)
    {
        console.log("It is Even Number")
    }
}
FindEvenNumber(8)

//if else

// syntax:

// if(condition)
// {
//     //statements
// }
// else
// {
//     //set of statementes
// }

function Evennoorodd(num)
{
    if(num%2==0)
    {
        console.log("It is Even Number")
    }
    else
    {
        console.log("It is Odd Number")
    }
}
Evennoorodd(2)
Evennoorodd(21)

//else if

// syntax:

// if(condition)
// {
//     //statements
// }
// else if(condition)
// {
//     //set of statementes
// }
//else if(condition)
// {
//     //set of statementes
//}

function wish(message)
{
    if(message==="gm")
    {
        console.log("Good Morning")
    }
    else if(message==="ga")
    {
        console.log("Good Afternoon")
    }
    else if(message==="ge")
    {
        console.log("Good Evening")
    }
    else if(message==="gn")
    {
        console.log("Good Night")
    }
    else 
    {
        console.log("Message Kaha hai Bhai")
    }
}
wish("ge")
wish("gm")
wish("sdc")


//switch

// Syntax

// switch()
// {
//     case "value":
//         {
//             set of code
//             break;
//         }
//     case "value":
//         {
//             set of code
//             break;
//         }
//     default "value":
//         {
//             set of code
//             break;
//         }
// }

// switch(message)
// {
//     case "gm":
//         {
//             console.log("Good Morning")
//             break
//         }
//     case "ga":
//         {
//             console.log("Good Afternoon")
//             break
//         }
//     case "gn":
//         {
//             console.log("Good Night")
//             break
//         }
//     default:
//         {
//             console.log("Thank You Tata Bye Bye")
//             break
//         }
// }
// message(gn)

//Trenary Operator

// syntax
// condition?true statement:false statement

var firstname="virat"
firstname.includes("Sachin")?console.log("My Name is Sachin"):console.log("My Name is Something Else")