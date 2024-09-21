// class Moment extends Date {

//     constructor(){
//         super()
//     }

// }

// var date = new Moment()
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())

// class Moment extends Date {
//   constructor(year) {
//     super(year);
//   }
// }
// var m = new Moment("August 15, 1947 20:22:10");
// console.log(m.getFullYear());
class Bike{

    constructor(params) {
        this.company="Honda Motarwa"
        
    }
}
class Vehicle extends Bike{
    constructor(name ,price){
        super()
        this.name=name;
        this.price=price
    }

}
var v = new Vehicle("Scooter","123456")
console.log(v)
