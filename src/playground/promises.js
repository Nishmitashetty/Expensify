//promises will allows us to do something after completing long asynchronous tasks...
//we should attach multiple then() calls for a single promise
//To reduce the complexity (then() in another then()) we should use promise-chaining

const promise = new Promise((resolve,reject) =>
{
    setTimeout(() =>{
          resolve('this is my resolved data!');
        // reject('Something went wrong!');
    },5000);
});

console.log('before');
//then call should return another promise and if that promise is fulfilled then second then() fires...
promise.then((data) =>{
    console.log(data);
    return new Promise((resolve,reject) =>
    {
        setTimeout(() =>{
              resolve('this is my second resolved data!');
        },5000);
    });
}).then((data2) =>
{
    console.log('this should work!',data2);
}).catch((error) =>
{
    console.log('error:',error);
});

console.log('after');