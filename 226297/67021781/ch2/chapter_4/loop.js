// for(i=0;i<13;)console.log(`2x${i}=${i++*2}`)
// var iarray = [...Array(13).keys()].map(function(i){
//     console.log(`2x${i} = ${2*i}`)
// }) ;
// var iarray = Array(13).fill(0).map(function(_,i){
//     console.log(`2x${i} = ${2*i}`)
// }) ;

// var fruits = {0: 'Apple',1: 'Papaya',2: 'Orange',3: 'Banana'}

// for(i = 0 ; i < Object.keys(fruits).length ; i ++){
//     console.log("fruits[%d] = %s",i , fruits[i])
// }

// for([index, item] of Object.entries(fruits)){
//     console.log("fruits[%d] = %s", index, item)
// }

// for(index in Object.values(fruits)){
//     console.log("fruits[%d] = %s",index ,fruits[index])
// }

// Object.entries(fruits).forEach(entry =>{
//     [index, item] = entry
//     console.log("fruits[%d] = %s",index , item)
// })

// for(item of Object.values(fruits)){
//     console.log("fruits = %s",item)
// }
var students = {
    6702001: { name:"A", age: 20, major: "Computer Science" },
    6702002: { name:"B", age: 21, major: "Information Technology" },
    6702003: { name:"C", age: 22, major: "Computer Science" },
}
for(var id in students){
    console.log( "ID: %s , Name: %s , Major: %s, Age: %d", id, students[id]["name"], students[id]["major"], students[id]["age"] )
}