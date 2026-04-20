
// LOCALSTORAGE -> ourStorage = window.localStorage
// allow us to store data in browser using key-value pair
// data is saved after we close the browser -> manually clered

// BASIC OPERATION WITH LOCALSTORAGE
// ls has a simple api that allow us to interact with browser ls

// 1) storaging data in licalstorage(setItem() method)

      localStorage.setItem('key','value') // key is identifier for the data

// 2) retrieve (getItem('key)) -> return value correspond to key and nul if not found
        localStorage.getItem('key')

// 3) removing data -> removeItem('key)
        localStorage.removeItem('key')


// 4) clearing all data in localstorage -> for current domain
        localStorage.clear();
           

// STORING STRING DATA

// SAVING DATA
// localStorage.setItem('name' , 'localstorage')
// localStorage.setItem('color', 'green')

// UPDATING
// localStorage.setItem('name' , 'localstorage(ls)')
// localStorage.setItem('color', 'blue')

// // GET DATA BY KEY
// let name = localStorage.getItem('name');
// console.log('This is name ',name);

// let color = localStorage.getItem('color');
// console.log('This is name ',color);

// let key1 = localStorage.key(1);
// console.log(key1);

// let items = localStorage.length;
// console.log('total number of item',items);

// localStorage.removeItem('color');

// let itemRem = localStorage.length;
// console.log('total number of item after removal',itemRem);

// localStorage.clear()

// console.log('after clearing all',localStorage.length);

// STORING NON-STRING DATA
// json.stringify() -> convert obj to string
// json.parse() -> convert string to obj

let user = {
    name: 'abcd',
    age: 4
};

localStorage.setItem('user',JSON.stringify(user));

let data = JSON.parse(localStorage.getItem('user'))

console.log(data.name)

localStorage.removeItem(data.age)

console.log(data.age)

let len = localStorage.length
console.log(len)

let key1 = localStorage.key(0);
console.log(key1);

localStorage.clear()