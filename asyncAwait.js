// Async/Await is a modern approach in JavaScript to work with asynchronous 
// code that makes it easier to write and understand asynchronous operations. 
// It's built on top of Promises and provides a more synchronous-like syntax 
// for handling asynchronous tasks.

function fun(value, check){
    return new Promise((resolve, reject)=>{
        if(check){
            setTimeout(()=>{
                resolve(value);
            }, 2000);
        } else{
            reject("Error");
        }
    })
}

// Async Await
async function ren(){
    try{
        const s1 = await fun("1", true);
        console.log(s1);

        const s2 = await fun("2", true);
        console.log(s2);
        
        const s3 = await fun("3", false);
        console.log(s3);

    } catch(error){
        console.log(error)
    }
}