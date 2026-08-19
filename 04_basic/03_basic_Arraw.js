const user = {
    username: "yogendra",
    price: 3999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
       // console.log(this);
    }
};

//user.welcomeMessage();
//console.log(this);


// function chai(){
//     let username = "ghidode"
//     console.log(this.username);
// }
// chai()




// const chai = () => {                 //-->Arrow Function  () => {}
//     let username = "ghidode"
//     console.log(this.username);
// }
//chai()



// const addTwo = (num1,num2) => {       explicity
//     return num1 + num2
// }
// console.log(addTwo(3,4));


//const addTwo = (num1,num2) => num1 + num2         inplicity


//const addTwo = (num1,num2) => (num1 + num2)


//const addTwo = (num1,num2) => {username: "Yogendra"}      //undefind

const addTwo = (num1,num2) => ({username: "yogendra"})

console.log(addTwo(3,4));