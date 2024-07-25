const d1=new Promise((resolve,reject)=>{
    if(true)
    {
        resolve("Promise has been resolved")
    }
    else
    {
        reject("Promise has been Rejected")
    }
})
d1.then((res)=>console.log(res))
d1.catch((e)=>console.log(e))