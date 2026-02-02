

// HERE WE APPLY A CALLBACK FUNCTION WHERE I USED A FUNCTION AS AN 
// ARGUMENT FOR ANOTHER FUNCTION

// HERE CALLBACK FUNCTION IS THE FUNC WHICH IS CALLED AS AN ARGUMENT

//   1) EXAMPLE 1
// const fnc = (val)=>{
//   return val;
// }

// const ans = fnc(function(a,b){
//     return a+b;
// });

// console.log(ans(1,2))


//   1) EXAMPLE 2
// const fnc1 = (val)=>{
//    return val;
// }

// function add(a,b){
//     return(a+b);
// }
// const ans1 = fnc1(add(5,5));
// console.log(ans1)

//   1) EXAMPLE 3
function greet(name,callback){
    console.log(`Hello ${name}`);
    callback();
}

function say(){
    console.log('How are you?')
}

greet('john', say);

// ASYNCHRONOUS CALL
 console.log('Start');

 function display(){
    console.log('Inside timeout');
 }
 setTimeout(display,3000);

 console.log('end')

// CALLBACKS IN FUNCTIONS HANDLOING

function calculator(a,b,callback){
    return callback(a,b);
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

console.log(calculator(2,3,mul))


