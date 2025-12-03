var iarray = [...Array(13).keys()].map(function(i){
    console.log(`2x${i} = ${2*i}`)
}) ;
var iarray = Array(13).fill(0).map(function(_,i){
    console.log(`2x${i} = ${2*i}`)
}) ;

var fruits = {0: 'Apple',1: 'Papaya',2: 'Orange',3: 'Banana'}

for(i = 0 ; i < Object.keys(fruits).length ; i ++){
    console.log("fruits[%d] = %s",i , fruits[i])
}

for([index, item] of Object.entries(fruits)){
    console.log("fruits[%d] = %s", index, item)
}

for(index in Object.values(fruits)){
    console.log("fruits[%d] = %s",index ,fruits[index])
}

Object.entries(fruits).forEach(entry =>{
    [index, item] = entry
    console.log("fruits[%d] = %s",index , item)
})

for(item of Object.values(fruits)){
    console.log("fruits = %s",item)
}