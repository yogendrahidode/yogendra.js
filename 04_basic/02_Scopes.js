// let a = 10
// const b = 20
// var c = 30

// console.log(a);
//  console.log(b);
//  console.log(c);


//var c = 3000    //---->globel
//let a = 5000

//if(true){        //--->Scops
//   let a = 10
//const b = 20
// var c = 30 
//    c = 30
// }

 //console.log(a);
 //console.log(b);
 //console.log(c);


 function one(){               //----->Nested
    const username = "ghidode"

    function two(){
      const wedsite = "youtube"
      console.log(username);
    }
    //console.log(website);

    two()
 }
// one()


if(true){
    const username = "ghidode"

    if(username === "ghidode"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++++++++++++++++++++++++++++  interestring  ++++++++++++++++++++++++


console.log(addone(5));
function addone(num){
   return num + 1
}
//addone(5)
//console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
//addTwo(5)
