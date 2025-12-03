var students = {
    6702001: { name:"A", age: 20, major: "Computer Science" },
    6702002: { name:"B", age: 21, major: "Information Technology" },
    6702003: { name:"C", age: 22, major: "Computer Science" },
}
for(var id in students){
    console.log( "ID: %s , Name: %s , Major: %s, Age: %d", id, students[id]["name"], students[id]["major"], students[id]["age"] )
}