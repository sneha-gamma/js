
// PROTOTYPE OBJ BAESD MODEL -> OBJ CAN INHERIT PROPERTIES AND BEHAVIOUR FROM OTHER OBJ


//  1)OBJECT PROTOTYPE

// SYNTAX
// Object.prototype -> IF WE ADD ANY PROPERTY OR METHOD WE tHIS THAN WE CAN USE THAT WITH ANY OBJECT TO ACCESS IT
// WE CAN ALSO USE IT TO ADD NEW PROP AND METHODS IN EXISTING OBJ AND CONSTRUCTOR

// EXAMPLE-1
// Object.prototype.display = ()=>{
//     console.log('I am from object prototype')
// }

// let a = {
//     name:'Sneha',
//     age:21
// }

// a.display()

// EXAMPLE-2 -> adds new prop to obj
// function Student(a,b){
//     this.name = a;
//     this.id = b;
// }
//Student.age = 20;

// Student.prototype.age = 12;
// const s1 = new Student('sneha',2345);
// console.log(s1.age)


// EXAMPLE-3 -> adds new method to obj
// Student.prototype.details = function(){
//     return this.name + ' '+this.id
// }

// let s2 = new Student('abc',1234);
// console.log(s2.details())

// EXAMPLE-4 -> adding method to prototype

// Array.prototype.sub = function(){
//     let sub = 0;
//     for(let i=0; i<this.length; i++){
//         sub -= this[i];
//     }
//     return sub;
// }

// let a1 = [1,4,8,6];
// console.log(a1.sub())



// PROTOTYPE INHERITANCE

// 1) CREATE AN EMPTY OBJECT HAVING NTHE PROP AND METH OF PARENT
// const parent = {
//     greet: function(){
//         console.log('hello from the parent object');
//     }
// };

// const child = Object.create(parent) // here we create a new empty object and sets its internal 
// // prototype this establihses prototypal inheritance allowing child to access prop and methods 

// child.syaHi = function(){
//     console.log('Hi from the child object')
// }

// child.greet();
// child.syaHi();

// 2) PROTOTYPE CHAIN

// function Animal(name){
//     this.identity = name;
// }

// Animal.prototype.speak = function(){
//     console.log(`${this.identity} makes a sound.`);
// };

// const dog = new Animal('Buddy');

// console.log(dog.identity);
// dog.speak();

// 3) USING __proto__
// __proto__  -> name for internal and hidden prototype

// let animal = {
//     animalEats:true,
// };

// let rabbit = {
//     rabbitJumps: true,
// }

// sets rabbit.[[prototype]] = animal

// rabbit.__proto__ = animal;
// console.log(rabbit.animalEats);
// console.log(rabbit.rabbitJumps);

// 4) Object.setPrototypeOf() method

let rabbit1 = {

};

let animal1 = {
    animalEats: true,
    hello:function(){
        console.log('helloo honey bunny')
    }
}

Object.setPrototypeOf(rabbit1,animal1);  //pehla prameter ->jis me hame assign krna he
console.log(rabbit1.animalEats);         //dusra prameter ->jis se hame assign krvana he
rabbit1.hello()