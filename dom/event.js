
// 1) ONCLICK -> (onClick,click,dblclick) -> OCCUR WHEN USER CLICK ELEM

// function btn(){
//     let val = document.getElementById('btn');
//     val.innerText = 'Clicked';
//     val.style.backgroundColor= 'yellow'
// }

// document.getElementById('btn').addEventListener('dblclick', btn);

// 2) ONMOUSEOVER -> (onmouseover,mouseover) -> mouse pointer move over the specified elem

// document.querySelector('p').addEventListener('mouseover',function(){
//     alert('mouse move over')
// })

// 3) ONKEYUP -> occur when user release key, even if key does not produce charcter value
// KEYPRESS -> user press a key that produce charcter value
// KEYDOWN -> user press down the key, occur even if key does not produce charcter value

// document.getElementById('i1').addEventListener('keyup',()=>{
//     let x = document.getElementById('i1').value;
//     document.getElementById('i2').innerText = x;
//     document.getElementById('i1').style.background='red';
// })


// // 4) ONLOAD
// document.querySelector('body').addEventListener('load',function(){
//     alert('loaded successfully')
// })


//  ADDEVENTLISTNER -> used to attch event handler to an elem in DOM
// element.addEventListner(event,fun,useCapture)  useCapture->boolean value -> true for event capturing

// REMOVEEVENTLISTNER -> used to remove eventlistner by passing the 
// same event , fn and flag

// EVENT PROPAGATION -> determine in which order element rceive the event
// when event is trigger on nested elem
// there are 2 ways to handle this EP -> Event Bubbling and Capturing

// STOP PROPOGATION -> used to stop eventPropagation -> event.stopPropagation()

// EVENT BUBBLING -> child to root(target to root) (bottom to top)

// let div1 = document.getElementById('div1')
// let div2 = document.getElementById('div2')
// let div3 = document.getElementById('div3')

// div1.addEventListener('click', (event)=>{
//     alert('component 1 event clicked')
//     //event.stopPropagation()
// });

// div2.addEventListener('click', (event)=>{
//     alert('component 2 event clicked')
//     // event.stopPropagation()
// });

// div3.addEventListener('click', (event)=>{
//     alert('component 3 event clicked')
//     event.stopPropagation()
//     // if(document.getElementById('inp').checked){
//     //     event.stopPropagation()
//     // }
// })

// EVENT CAPTURING OR TRICKLE DOWN -> top to bottom(parent to target)

// let div4 = document.getElementById('div1')
// let div5 = document.getElementById('div2')
// let div6 = document.getElementById('div3')

// div4.addEventListener('click', (event)=>{
//     event.stopPropagation()
//     alert('component 1 event clicked')
//     console.log(event)
// },true);

// div5.addEventListener('click', (event)=>{
//     event.stopPropagation()
//     alert('component 2 event clicked')
// },true);

// div6.addEventListener('click', (event)=>{
//     //event.stopPropagation()
//     console.log(event)
//     confirm('component 3 event clicked')

// },true)



// EVENT DELEGATION 
//  used to handle events efficiently by attaching a single event litner
// to parent instead of adding listners to multiple similar child
// .target -> access to elem
// .nodeName -> identify specific node

const elem = document.createElement('ul');

function respond(event){
    console.log(event)
    if(event.target.nodeName === 'LI'){
        console.log(event.target.innerText)
    }

        if(event.target = 'button'){
            console.log(event.target.innerText)
        }
}

for(let i=1; i<=5; i++){
    let newelem = document.createElement('li');
    newelem.textContent = 'This is line '+ i;
    elem.appendChild(newelem);
}
let btn = document.createElement('button');
btn.innerText = 'Doing delegation'
elem.appendChild(btn)
elem.addEventListener('click',respond);

document.body.appendChild(elem);