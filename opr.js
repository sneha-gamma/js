// ARITHMETIC, COMPARISON, LOGICAL, ASSIGNMENT, UNARY, TERNARY

// INSTANCEOF USED FOR REFRENCE DATA TYPES
//TYPEOF FOR PRIMITIVE

let arr = [];
arr instanceof Array
   
let a = 1;
console.log(++a);
console.log(a++);
console.log(a);

function getGrade(score){

    if(score<32) return 'Fail';
    else if(score<60) return 'D';
    else if(score<70) return 'C';
    else if(score<80) return 'B';
    else if(score<90) return 'A';
    else if(score<=100) return 'A+';
    else return 'Invalid marks';
}

console.log(getGrade(89));