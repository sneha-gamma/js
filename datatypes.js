
// primitive = aisi sari value jinko copy krne pe tumhe ek real copy mil jaye
// number, string, boolean ,null , undefine, symbol

//reference = inko copy krne par real copy nhi milegi but apko refernece milega
// Array , object, string(create shallow copy)

// let a = 12;
// let b = a;

// console.log(a);  //12
// console.log(b);  //12
// console.log(a===b);

// a = a+2;
// console.log(a);  //14
// console.log(b);  //12
// console.log(a===b);



// SHALLOW COPY (SHARE REFERENCE => CHANGE IN ONE SHOW IN TWO)
// let arr = [1,2,3];
// let brr = arr;

// console.log(arr); 
// console.log(brr); 

// arr[3] = 5;

// console.log(arr); 
// console.log(brr); 
// console.log(arr===brr);


//BIGINT
let x = 9007199254740991n;
x = x+8n;
console.log(x); 
console.log(typeof(x)); 

console.log('4'-'1');