
// CHANGE THE CONTENT OF AN ELEMENT

// 1) innerHTMl -> it change the content and also the html tag 

// let data = document.querySelector('h1');
// console.dir(data);

//data.innerHTML = 'start manipulating'
//data.innerHTML = '<strong>start manipulating</strong>';

// 2) textContent/innerText -> change the content only not the tag
// let data1 = document.querySelector('p');
// console.dir(data1);

//data.innerHTML = 'start manipulating'
// data1.textContent = '<strong>start manipulating</strong>';
// data1.textContent = 'start manipulating'
// data1.innerText = 'abcdsrv'
// data1.innerText = '<h1>hiii</h1>'



// EXAMPLE OF THE CONTENT CHANGE
function changeContent(){
    document.querySelector('h1').innerHTML = '<i>This is outer inner html</i>';
    document.querySelector('p').innerText = 'Inner content is changed'
}

//  EXAMPLE FOR MANIPULATE CLASS ATTRIBUTE

// 1) classList.add() -> add class to an element -> we can provide more than two classes
// 2) classList.remove() -> remove clss from element -> we can provide more than two classes
// 3) classList.toggle() -> toggle class from element -> we can't provide more than two classes

let data = document.querySelector('div');

const addClass = ()=>{
      data.classList.add('highlight','bold')
}

const removeClass = ()=>{
      data.classList.remove('bold')
}

const toggleClass = ()=>{
      data.classList.toggle('highlight')
}


// 3)  CREATE. ADD, AND REMOVE ELEMENTS

// document.createElement() -> creates a new element
// appendChild() -> adds new element to a parent element
// removeChild() -> Remove child element

// create
let newhead = document.createElement('h3');
newhead.innerText = 'This is a created element';

// append
document.body.appendChild(newhead);

// remove
document.body.removeChild(newhead);

// insert at specific position
let refNode = document.querySelector('p');
document.body.insertBefore(newhead,refNode);

let remp = document.querySelector('p');
document.body.removeChild(remp)


// MANIPULATE ELEMENT ATTRIBUTES

// 1) setAttribute()

let val = document.querySelector('a');
val.setAttribute('href','https://www.geeksforgeeks.org/html/html-dom-setattribute-method/')
console.dir(val)


// 2) getAttribute -> return null or empty string if specified attribute doesnt exist
let val1 = document.querySelector('img');
console.log(val1.getAttribute('alt')); // output->image
console.dir(val1)

// 3) removeAttribute -> 
let val2 = document.querySelector('h1');
console.log(val2.removeAttribute('id'))
console.dir(val2)


// MANIPULATE DATA ATTRIBUTE

document.getElementById('demo').dataset.userId = '12345';
let id = document.getElementById('demo').dataset.userId;
console.log(id)