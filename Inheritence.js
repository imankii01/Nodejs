// // // class Moment extends Date {

// // //     constructor(){
// // //         super()
// // //     }

// // // }

// // // var date = new Moment()
// // // console.log(date.getDate())
// // // console.log(date.getMonth())
// // // console.log(date.getFullYear())

// // // class Moment extends Date {
// // //   constructor(year) {
// // //     super(year);
// // //   }
// // // }
// // // var m = new Moment("August 15, 1947 20:22:10");
// // // console.log(m.getFullYear());
// // class Bike{

// //     constructor(params) {
// //         this.company="Honda Motarwa"
        
// //     }
// // }
// // class Vehicle extends Bike{
// //     constructor(name ,price){
// //         super()
// //         this.name=name;
// //         this.price=price
// //     }

// // }
// // var v = new Vehicle("Scooter","123456")
// // console.log(v)

// // Constructor function for Bike
// function Bike(company) {
//     this.company = company;   
// }

// Bike.prototype.getCompany = function() {
//     return this.company;  
// }

// // Constructor function for Vehicle
// function Vehicle(name, price) {
//     this.name = name;  
//     this.price = price;  
// }

// // Setting the prototype of Vehicle to be Bike
// Vehicle.prototype = Object.create(Bike.prototype);

// // Creating instances
// var bike = new Bike("Honda");
// var vehicle = new Vehicle("Shine", 70000);

// // Setting the company of the vehicle to be the bike's company
// vehicle.company = bike.company;

// document.writeln();

function Bike(company) {
    this.company=company
    
}
Bike.prototype.getCompany=function(){
    return this.company
}
function Vehicle(name,price){
    this.name = name;
    this.price = price
}
Vehicle.prototype = Object.create(Bike.prototype);
var bike  = new Bike("honda")
var vehicle = new Vehicle("asdfasdf",2345)
vehicle.company = bike.company
console.log()