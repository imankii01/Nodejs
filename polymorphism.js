// class Animal {
//     speak() {
//         console.log("Animal speaks");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat meows");
//     }
// }

// const animals = [new Dog(), new Cat()];
// console.log(animals)
// animals.forEach(animal => animal.speak());
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

const shapes = [new Shape(),new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
