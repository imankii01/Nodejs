class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    detail() {
        console.log(this.id + " " + this.name);
        console.log();
    }
}

var e1 = new Employee(101, "Ankit");
var e2 = new Employee(103, "AnkitRohan");

e1.detail();
e2.detail();
