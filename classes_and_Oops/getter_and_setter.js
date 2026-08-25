class User {
    constructor(email,password){
     this.email = email;
     this.password = password
    }
   
     get email(){
        return this._email.toUpperCase()
     }
     set email(value){
         this._email = value
     }


    get password(){
        return `${this._password}ghidode`
    }
    set password(value){
      this._password = value
    }
}
const ghidode = new User("ghidode@gmail.com","2121")
console.log(ghidode.email);
