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
        this.marks=marks
    }
    getMarks(){
        return this.marks;
    }
}
var stud = new Students()
stud.setMarks(2345)
stud.setName("asdfasf")
stud.setName("asdfadafasfda")
console.log(stud.getName())
console.log(stud.getMarks())