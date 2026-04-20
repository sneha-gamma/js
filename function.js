

// 1) function expression
// let fnc = function(){

// }

// 2) function statement
// function fnc(){

// }

// 3) arrow function
// const fnc = ()=>{

// }

// PARAMETERS

// DEFAULT PARA
// function add(v1=0,v2=0){
//    console.log(v1+v2);
// }
// add();

// REST PARAMETER ->  jb arguments kai saare ho toh hume utme parameter dene pdte he 
// issey bachne ke liye rest(...) use krte he function me aur isi ko spread opr bolte he

// function abcd(...val){
//     console.log(val);
// }

// abcd(1,2,'a','b')
// console.log(typeof abcd)

// function abcd(a,b,c,...val){
//     console.log(a,b,c,val);
// }
// abcd(1,2,3,'s','a','b')
// console.log(typeof abcd)

// 4) first class function -> func ko val ki trah treat krskte he

// function pqr(val){
//     val();
// }

// pqr(function(){
//     console.log('hi');
// })

// 5) HIGHER ORDER FUNC -> aise fnc hote he joh return kre func ya accept kare func
//  unke parameter me

// function higher(val){
//     val();
// }

// higher(function(){

// })

function higher(){
    return function(){
            console.log('higher fun as return func')
    }
}
 let ans = higher();
 ans();

// 6) PURE VS IMPURE FUNC -> 
// pure -> aisa func jo ki bahar ki val ko naa badle wo hai pure
// impure -> aisa func jo ki bahar ki value badal de

//let a = 10;

// iski wjah se bahar ki val pe koi fark nhi pada
// function pure(){
//     console.log('hi');
// }

// iski wjh se bahar ki value badal gyi
// function impure(){
//     console.log(--a);
// }

// CLOSURES -> ek func joh return kre ek aur function aur return 
// hone wala func humesa use karega parent func ka koi variable

function closure(){
    let x = 20;
    return function(){
        x++
          console.log(x);
    }
}

const a = closure();
a();


function discountCalculator(discount){
    return function(price){
             return price-price*(discount/100);
    }
}

console.log(discountCalculator(10));
let discount = discountCalculator(10);
console.log(discount(100));

//  LEXICAL SCOPING -> 

// function abc(){
//     let a = 10;
//     function def(){
//         let b = 20;
//         function ghi(){
//             let c  = 30;
//         }
//     }
// }

// IIFE-IMMEDIATELY INVOKED FUNCTION EXPRESSION

// (function(){
//     console.log('he')
// })(); 

// FUNCTION HOISTING ->
// function statement -> function statement me function hoist hojata he
// function expression -> isme func hoist nhi hota referror ata he

// abcde(1,2); 
// function abcde(a,b){
//       console.log(a+b)  // result will display
// }


// pqrs();
// let pqrs = function(){
//       console.log('he') // reference error
// }


// SOME CONFUSING THING

//  fnc() //REF ERROR
//  const fnc = ()=>{
//        console.log(hello);
//  }

// fnc1() //REFERENCE ERR
//  let fnc1 = ()=>{
//        console.log(hello);
//  }

 //fnc2()  //GIVES NOT A FUNCTION
//  var fnc2 = ()=>{
//        console.log('hello');
//  }
//  fnc2()
