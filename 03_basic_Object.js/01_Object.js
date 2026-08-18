//singleton
//object.create
 

//object literals -->objects diclear

const JsUser = {
    name: "Yogendra",
    "full name" : "Yogendra Ghidode",
    age: 22,
    location: "bhopal",
    email: "ghidode@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);

JsUser.email = "yogendra@gmail.com"
    
JsUser.greeting = function(){
    console.log("Hello Js Users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js Users,${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

