// const emp ={
//     id:102,
//     name:"Ankit"
// }
// console.log(emp)

// var emp = new Object()
// var data={}
// data.id= 333
// console.log(data)
// emp.id = 101
// console.log(emp)

function emp(id,name,salary){
    this.id= id;
    this.name = name;
    this.salary=salary;
}

e = new emp(123,"asdfads",2345)
console.log(e)