// js is a prototupe-based langugae that facicalitates the objects to acquire properties and features from one another.Here each object contianer a prototype object.
//In JavaScript whenever a fucntion is crated the prototype property is added to that function automatically .This property is a prototype object that holds a constructot property

// ClassName.prototype.methodName
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // Call the parent class constructor
    }

    speak() {
        console.log(`${this.name} barks!`);
    }
}

const myDog = new Dog("Rex");
myDog.speak(); // "Rex barks!"
const dog = new Animal("Dog");
dog.speak(); // "Dog makes a noise."
console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true
