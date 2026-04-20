
// INHERITANCE 

// class Car{
//     constructor(make,year,model){
//             this.make = make;
//             this.year = year;
//             this.model = model;
//     }

//     details(){
//         return (`${this.year} ${this.make} ${this.model}`);
//     }
// }

// class ElectricCar extends Car{
//     constructor(make,year,model,batteyLife){
//            super(make,year,model);
//            this.batteyLife = batteyLife;
//     }

//     d(){
//         console.log(` ${super.details()} Battery Life: ${this.batteyLife} hours`);
//     }
// }

// const e1 = new ElectricCar('Tesla','Model S', 2022,20);
// e1.details();
// e1.d();



// OBJECTS IN JS CAN INHERIT PROPERTIES AND ACTIONS FROM OTHER OBJECTS
// THIS CAN BE DONE USING PROTOTYPE -> WHICH CONNECT OBJ IN CHAIN

 // COMMON TYPES OF INHERITANCE

 // 1) PROTOTYPE BASED INHERITANCE

 function Animal(name1){
    this.name1 = name1;
 }

 Animal.prototype.speak = function(){
    console.log(`${this.name1} makes a sound.`);
 };

 // CHILD CONSTRUCTOR FUNCTION
 function Dog(name1){
        Animal.call(this , name1); //inherit properties
 }

 // INHERIT METHODS FROM ANIMAL
 Dog.prototype = Object.create(Animal.prototype);
 Dog.prototype.constructor = Dog;

 // ADDING NEW METHOD TO DOG
 Dog.prototype.bark = function(){   // yha arrow func krne pe name undefine bta rha tha 
     console.log(`${this.name1} barks: Woof`)
 };

 // CREATING AN INSTANCE
 const mydog = new Dog('buddy');
 mydog.bark();
 mydog.speak();