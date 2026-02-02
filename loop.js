
// FOR , WHILE, FOREACH, 

// 1) FOR LOOP -> Kha se jana he ->kb tk jana he -> kaise jana he (1-50)

// for(let i=1; i<101; i++){
//     console.log(i);
// }


// 2) WHILE LOOP-> Kha se jana he-> kb rukna he -> kaise jana he (1 se jb tak abhishek naam na aye)
// start
// while(end){
//     change
// }

// let i=1;
// while(i<32){
//     console.log(i);
//     i++;
//}

// 3) DO-WHILE -> yeh ek bar toh jarur chlega
// do{

// }
// while(end)
// let j=1
// do{
//     console.log(j);
//     i++;
// }
// while(j<10)


// 4) FOR-IN
 
// let obj = {
//     name: 'Sneha',
//     age: 20,
//     city: 'Indore'
// }

// for(let i in obj){
//     console.log(i)  //print keys
// }

// for(let i in obj){
//     console.log(obj[i])  //print values
// }

// let arr = [1,2,3,4,5];
// for(let i in arr){
//     console.log(arr[i])  //print VALUES
// }


// 5) FOR-OF
let arr = [1,2,3,4,5];

let obj = {
    name: 'Sneha',
    age: 20,
    city: 'Indore'
}


for(let i of arr){
    if(i==3){
        continue; 
    } 
    console.log(i)
    
}

for(let key of Object.keys(obj)){
    console.log(key);
}
