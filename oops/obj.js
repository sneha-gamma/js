
// class syntax 

class Car{
    constructor(){
      // initialize pro
    }

    methodName(){

    }
}

// constructor function

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     };
// }

// // CREATING INSTANCES WITH A CONSTRUCTOR
// const p1 = new Person('abc',10);
// const p2 = new Person('abcd',20);

// p1.sayHello();
// p2.sayHello()

// CLASS CREATION

class Person{

    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    g(){
        console.log(`Hi I'm ${this.name} and I'm ${this.age} and live in ${this.city}`);
    }
}

const p1 = new Person('abc',19,'pune');
p1.g();


