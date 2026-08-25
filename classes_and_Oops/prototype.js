// let myName = "Ghidode     "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman","vijay"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.ghidode = function(){
    console.log(`ghidode is present in all objects`)
}

heroPower.ghidode()
myHeros.ghidode()
