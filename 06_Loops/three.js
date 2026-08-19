// for of

//["","",""]    -->array String
//[{},{},{}]    --->array object

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
   //console.log(num); 
}

const greeting = "ghidode"
for (const String of greeting) {
    //console.log(String);
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('Mp',"Madhay pradesh")
//console.log(map);

for (const [key,value] of map) {
   // console.log(key,value);
}

const myObject = {
    game1: 'NFS',
    game2: 'NFS2',
    game3: 'NFS3'
}
// for (const [key,value] of myObject) {
//     console.log(key , value);
// }

