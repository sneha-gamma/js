
// setTimeout() -> async fn used to provide the delay to a specific fn im ms 
// execute only once


// console.log('before the setTimeout fun');

// setTimeout(function(){
//     console.log('inside settimeout func')
// },2000);

// console.log('after the setTimeout fun');


// CLEARTIMEOUT() -> cancellation the setTimeout() fn

// function delayFn(){
//     console.log('this wont be executed due to cleartimeout');
// }

// let timeoutId = setTimeout(delayFn,2000);

// clearTimeout(timeoutId)

// console.log('timeout cancel');



// SETINTERVAL - > for repeting the task

// console.log('before the setTimeout fun');

// let interval = setInterval(function(){
//     console.log('inside settimeout func')
// },2000);

// console.log('after the setTimeout fun');

// clearInterval(interval)
//  console.log(typeof interval);


let timer = 0;
let id;

function startTimer(){
    let time = new Date();

    document.getElementById('p1').textContent = time.toLocaleTimeString();
      id=setTimeout(startTimer,1000);
}

function stopTime(){
    clearTimeout(id);
}




