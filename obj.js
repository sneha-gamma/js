
// let obj = {
//     name: 'Sneha',
//     age:21,
//     Khaana: 'dal chawal'
// };

// console.log(obj['name']);
// console.log(obj.Khaana);

// let aa = 'name';
// console.log(obj[aa]); //sneha
// console.log(obj.aa);  // undefined

let user = {
    name: 'Sneha',
    add:{
        city:'Bhopal',
        pin:452002,
        location:{
            lat:23.2,
            lng:77.4,
        },
    },
}


// let info = {
//     role: 'software engg',
//     age: 20,
//     mode: 'offline'
// }

// DESTRUCTING

// when name is same as given in obj
// let {lat,lng} = user.add.location;
// console.log(lat,lng);

// when we want different name rather than obj
let {lat: latitude, lng:longitude} = user.add.location;
console.log(longitude,latitude)


// const {name: myname} = user;
// console.log(myname);

// const {role: myrole,age: myage} = info;
// console.log(myrole, myage);




// LOOPOING IN OBJECT

// 1) FOR-IN

// for(let key in user){
//     console.log(obj[key])
// }


//   COPYING OBJECT

//1) USING SPREAD
// let user2 = {...user};
// console.log(user2);

// 2) ASSIGN

// let obj2 = Object.assign({},user);
// console.log(obj2);


// DEEP CLONE -> INSME AGR OBJ ME NESTED VALUE HE LIKE ADD. THEN IT 
// PASS THE REF AND CHNGE IN CLONE ONE ALSO CHANGE THE ORIGINAL 
// ONE BUT IT DOES NOT CHANGE THE WITHOUT NESTED PART LIKE NAME

 // JSON.stringify(obj) -> convert obj into string
 // JSON.parse() -> convert string into obj

//  let copyobj = JSON.parse(JSON.stringify(user));
//  console.log(copyobj);

//  copyobj.add.city = 'Indore';
//   console.log(copyobj);


  // OPTIONAL CHAINING -> KI AGR WOH ADAT HO TOH DEDO NA HO TOH ERROR MT DO

//   console.log(user?.add?.city);

  // COMPUTED PROPERTY
//   let role = 'software engg';
//   let user2 = {
//     name1: 'Sneha',
//     age: 20,
//     [role]: 'sneha',
//     add:{
//         city:'Bhopal',
//         pin:452002,
//         location:{
//             lat:23.2,
//             lng:77.4,
//         },
//     },
// }
// console.log(user2);


// OBJECT INSIDE ARRAY

const details = [
    {name: 'Nick' , age: 25 },
    {name: 'John', age: 35},
    {name: 'abc', age: 20}
];

for(let item of details){
    console.log(item)
}





