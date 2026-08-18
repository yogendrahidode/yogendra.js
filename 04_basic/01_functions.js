// console.log("y");
// console.log("o");
// console.log("g");
// console.log("e");
// console.log("n");
// console.log("d");
// console.log("r");
// console.log("a");

function myName(){
    console.log("y");
console.log("o");
console.log("g");
console.log("e");
console.log("n");
console.log("d");
console.log("r");
console.log("a");
}

//myName ----->refresh
//myName()

//  function addTwoNumber(number1, number2){
//     console.log(number1 + number2)

//  }


 function addTwoNumber(number1, number2){
//    let result = number1 + number2
//    return result
return number1 + number2

 }



//addTwoNumber(5,6)
//addTwoNumber(5,"6")
//addTwoNumber(5,null)

const result = addTwoNumber(5,6)
//console.log("Result: ", result);




function loginUserMessage(username){
    if(!username){
        console.log("Pleace enter username");
        return
    }
  return `${username} just logged in `
}

//console.log(loginUserMessage("Ghidode"));
//console.log(loginUserMessage(Yogendra));
console.log(loginUserMessage());

