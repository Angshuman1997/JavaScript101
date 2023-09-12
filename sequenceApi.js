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

// ren()

// Promise
fun("Step 1", true)
    .then((result) => {
        console.log("Step 1 Resolved:", result);
        return fun("Step 2", false); // Return a new promise
    })
    .then((result) => {
        console.log("Step 2 Resolved:", result);
        return fun("Step 3", true); // Return another new promise
    })
    .then((result) => {
        console.log("Step 3 Resolved:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
