var colors=['white','blue','orange','grey','pink','violate','red','yellow']
var len=colors.length-1

var buttoncontrol=document.getElementById('btn')
var spancontrol=document.querySelector('.color')

buttoncontrol.addEventListener('click',()=>{
   var index= generateRandomNumber()
//    console.log(index)
document.body.style.backgroundColor=colors[index]
spancontrol.textContent=colors[index]
})

function generateRandomNumber()
{
    return Math.round(Math.random()*len)
}
