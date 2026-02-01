

let arr = [1,20,3,4,5];

arr.push(10); // LAST ME VALUE ADD
arr.pop();    // LAST VAL REMOVE
arr.shift();  // REMOVE FIRST VAL
arr.unshift(10); // ADD IN STARTING
arr.slice(1,3);   // REMOVE THE VALUE FROM THE GIVEN INDEX TO END-1 INDEX 
// BUT DOES NOT CHANGE IN ORIGINAL ARR CREATE A NEW ARRAY 
arr.splice(2,1)  // TAKE  A STARTING INDEX AND NUMBER OF VALUES TO BE REMOVED 
// IT DOES THE CHANGES IN ORIGINAL ARR
arr.reverse() // CHANGE IN ORG ARRAY
arr.sort(function(a,b){  // SYNTAX OF SORT (FOR DESC->B-A) (FOR AESC->A-B)
    return b-a;
}) //

console.log(arr);



// MAP FILTER REDUCE -

// SORT , MAP, FILTER, REDUCE, FOREACH, FIND -> YEH SB EK FUNCTION ACCEPT KRTE HE 
// AUR USME EK VALUE MILTI HE 
// MAP FILTER REDUCE -> YEH TEENO KUCH RETURN KRTE HAI

// 1) FOR-EACH
let brr = [10,20,30,40,50];
brr.forEach(function(val){
    console.log(val+5)
})

// 1) MAP -> YEH SIRF TB USE KRNA HAI JB APKO EK NAYA ARRAY BANANA HAIN
// PICHLE ARRAY KE DATA KE BASIS PE

// MAP DIKHTE HI MAAN ME EK BLANK ARR BNALO

// let crr = [11,23,35,440,540];

// let newcrr = crr.map(function(val){
//     if(val>50) return val;                 // EK NAYA ARR BNAYEGA JISME PURANE VAL KI JGAH 12 AJAYEGA
// })
// console.log(newcrr);


// 2) FILTER -> NEWARR BANATA HE USME HUM RETURN ME TRUE YA FALSE DALTE HE
// toh sirf cond ke acc value lega baki me undefined nhi show krega

let drr = [11,23,35,440,540];

let newdrr = drr.filter(function(val){
    if(val>50) return true;                
})
console.log(newdrr);


// 3) REDUCE-> JB HAME PURE ARR SE EK VALUE BNANI HO TB USE KREGE

let err = [11,23,35,440,540];

let newerr = err.reduce(function(accumulator,val){
          return accumulator+val
},0)
console.log(newerr);

// 4) FIND-> FIND PEHLI VALUE KO KREGA AGR ARR ME SAME 4 VALUE HE BUT WOH PEHLA HI KREGA

let frr = [11,23,11,440,540];

let newfrr = frr.find(function(val){
   return val==20;
})
console.log(newfrr);


// 5) SOME AND EVERY = SOME-> AGR EK NE BHI COND TRUE KRDI TOH TRUE DEGA
//  EVERY -> AGR EK NE BHI FALSE DIYA TOH FINAL FALSE

let newsome = frr.some(function(val){
    return  val < 20 
})

console.log(newsome);

let newevery = frr.every(function(val){
    return  val < 20 
})

console.log(newevery);


// DESTRUCTING

let grr = [1,2,3,4,5];

// pehle wala aur lat vala elem bahar nikalna he alg se

// let [a,b, ,c] = grr;  //
// console.log(a,b,c);

// SPREAD OPR

// let arr2 = [...grr];
// console.log(arr2)

// grr[2] = 10;
// console.log(grr)
// console.log(arr2);


 // QUESTIONSSS 

 let fruits = ['apple','banana', 'guava'];
 console.log(fruits[1]);
 fruits.push('mango');
 fruits.unshift('pineapple');
console.log(fruits);

