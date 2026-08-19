// const temperature = 41;

// if (temperature < 50) {
//     console.log("Less than 50");
// } 
// else
// {
//     console.log("Temperature greater than or equal to 50");
// }



// const score = 200
// if(score > 100){
//     const power = "fly"
//     var power = "fly"
//     console.log(`User power:${power}`);

// }
// console.log(`User power:${power}`);




//const balance = 1000

//if(balance > 500) console.log("test"),
//console.log("test2");

// if(balance < 500){
//  console.log("Less then 500");
// }
// else if(balance < 750){
// console.log("Less then 750");
// }
// else if(balance < 900){
//   console.log("Less then 900");
// }
// else{
//     console.log("Less then 1200");
// }
 


const userLoggedIn = true

const debitcard = true

const loggedInFromGoogle = false

const loggedInFromEmail = true

if(userLoggedIn && debitcard){          //dono condition true
 console.log("Allow for Shopping");
 
}

if(loggedInFromGoogle || loggedInFromEmail){    //one condition true
   console.log("User logged in");
}



//Nullish coalescring opreter(??): null undefind

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//terniary operator

//condition ? true : false


const IceteaPrice = 100
IceteaPrice >=  80 ? console.log ("Less then 80") : console.log("more then 80")
