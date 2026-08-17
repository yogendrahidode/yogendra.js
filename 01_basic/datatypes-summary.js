//primitive

//7 types : String  , Number, Boolearn , null , undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);



//Reference (NON primitive)

// Array , Objects, Functions

const heros = ["Yogendra", "Ghidode","doga"]  //Array

let myObj = {                   //Object
    name: "yogendra",         
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}








//+++++++++++++++++++++++++++++++++++++

//stack(primitive) , heap(NON primitive)

let myYoutubename = "gamingWithGhidode"

let anothername = myYoutubename

anothername = "gamingWithYogendra"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email : "ghidode@gmail.com",
    upi : "user@ybl"
}


let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

