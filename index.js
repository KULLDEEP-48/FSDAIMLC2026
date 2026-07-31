// function sum(a, b) {
//   return a + b;
// }
// function sumWithMsg(clbk,msg){
//    const result=clbk(20,40);
//    console.log(msg+":" + result);
// }
// sumWithMsg(sum,"Hey calculation with js");


// function login(msg,error){
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Success: "+msg);
//     }
// }

// function loginVerification(username,password,clbk){
//     if(username==="0325" && password==="0325"){
//         clbk("Login successful",null);
//     }
//     else{
//         clbk(null,"Invalid username or password");
//     }
// }
// loginVerification("0325","0325",login)
// Callback function

// function checkNumber(num, clbk) {
//     clbk(num);
// }
// function oddEven(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// checkNumber(7, oddEven);


// console.log("first")
// setTimeout(()=>{console.log("second")},1000)
// for(i=0;i<10000;i++){
//     console.log("second")
// }
// console.log("third")

// setTimeout(()=>{ console.log("first")
//     setTimeout(()=>{ console.log("second")
//         setTimeout(()=>{ console.log("third")
//             setTimeout(()=>{ console.log("fourth")
//                 setTimeout(()=>{ console.log("fifth")
//                 },100)
//             },100)
//         },100)
//     },100)
// },100)

// PROMISES.

const myPromise=new Promise((resolve,reject)=>{
    username="kuldeep0111"
    password="1531156"
    if(username=="kuldeep0111" & password=="1531156"){
        resolve("Success")
    }
    else{
        reject("Failure")
    }
})

// myPromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All the resources have been closed and memory released")
// })

async function handlelogin(){
    try{
        await myPromise
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log("All the resources have been closed and memory released")
    }
}
handlelogin();