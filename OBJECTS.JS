//objects 2 tareeke se declare hote hai
//singleton: constructor se banta hai

//Object Literals 
/*
    objects is the collection of key value pair
*/
const JSUser={
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    greet: function(){
        console.log("hello")
    },
    lastLoginDays: ["Monday","Saturday"]
}

//access objects

console.log(JSUser.email)
console.log(JSUser["email"])

//change values 
JSUser.name="Aditya"
Object.freeze(JSUser)//ab kuch change ny kar skate 
