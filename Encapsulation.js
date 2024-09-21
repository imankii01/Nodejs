class Students{

    constructor(){
        var name;
        var marks;
    }
    getName(){
        return this.name

    }
    setName(name){
        this.name = name

    }
    setMarks(marks){
       if(marks < 0 || marks > 100){
        console.log("Invalid Marks")
       }
       else{
        this.marks=marks
       }
    }
    getMarks(){
        return this.marks;
    }
}
var stud = new Students()
stud.setMarks(2345)
stud.setName("asdfadafasfda")
console.log(stud.getName())
console.log(stud.getMarks())