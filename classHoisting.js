var e1 = new Employee(101,"Ankit")
var e2 = new Employee(101,"Rohan")
e1.detail()
e2.detail()

class Employee{
    constructor(id,name){
        this.id = id;
        this.name = name
    }
    detail(){
        console.log(this.name + this.id)
    }
}
