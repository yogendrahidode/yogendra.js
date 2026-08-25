const user = {
    username: "yogendra",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
       // console.log("Got user details from database");
      // console.log(`Username: ${this.username}`);
      console.log(this)
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);



function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}
const userOne = new User("ghidode",23,true)
const userTwo = new User("yogendra",45,true)
console.log(userOne.constructor);
console.log(userTwo);