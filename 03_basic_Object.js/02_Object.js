//const tinderUser = new Object()   --->singleton object

//const tinderUser = {}       -->non singleton object

const tinderUser ={}
tinderUser.id = "123assd"
tinderUser.name = "Akash"
tinderUser.isLoggedIn = false

//console.log(tinderUser);




const regularUser = {
    email: "ghidode@gmail.com",
    fullname: {
        userfullname:{
            firstname : "Yogendra",
            lastname : "Ghidode"
        }
    }

}
//console.log(regularUser.fullname.userfullname.firstname.lastname);


const obj1 = {1: "a",2: "b",3: "c"}
const obj2 = {4: "d", 5: "e"}
//const obj3 = {obj1 , obj2}

//const obj3 = Object.assign({}, obj1 , obj2)
//console.log(obj3);

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users =[
    {
        id: 1,
        email: "ghidode@gmail.com"
    }
]
//console.log(users[0].email);
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

const course = {
     coursename: "js in hindi",
     price : "999",
     courseInstructor: "Yogendra"
}

const {courseInstructor} = course
console.log(courseInstructor);

const navbar = () => {

}

navbar(company = "ghidode")

//json

//{
//"name": "Ghidode",
//"coursename": js,
//"price": "free"
//}






