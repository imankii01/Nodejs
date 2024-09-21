function Students(name, marks) {
    var s_name = name;
    var s_marks = marks;

    Object.defineProperty(this, "name", {
        get: function() {
            return s_name;
        },
        set: function(newName) {
            s_name = newName;
        }
    });

    Object.defineProperty(this, "marks", {
        get: function() {
            return s_marks;
        },
        set: function(newMarks) {
            s_marks = newMarks;
        }
    });
}

var stud = new Students("john", 80);
console.log(stud.name,stud.marks);
