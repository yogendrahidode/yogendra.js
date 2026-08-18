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
       // console.log("Pleace enter username");
        return
    }
  return `${username} just logged in `
}

//console.log(loginUserMessage("Ghidode"));
//console.log(loginUserMessage(Yogendra));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){    //  ...->rest operater
    return num1

}
//console.log(calculateCartPrice(200,400,230));
const user = {
    username: "ghidode",
    price: 199

}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)

handleObject({
    username: "yogendra",
    price:299
})

const myNewArray = [5500,765,44,533,3,56665]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));

