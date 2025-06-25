/*
set timers are used to execute something after a certain intervals of time

syntax(function,time,arg1,arg2);
*/

setTimeout(() => {
    console.log("i am inside set timeout")
}, 2000);

//clear timeout se stop hota hai settimeout run ny hota hai

/*
setinterval har time bad repeta hota hai


*/

setInterval(()=>{
    console.log("hello");
},3000)

