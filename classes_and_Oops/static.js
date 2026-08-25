class User{
    constructor(username){
    this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    createId(){
        return`123`
    }
}
const ghidode = new User("ghidode")
console.log(ghidode.createId())