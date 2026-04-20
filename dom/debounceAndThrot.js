

// DEBOUNCING -> USED TO ENSURE THAT FN IS NOT CALLED TOO FREQUENTLY
// it limit the function execution for triggred event


// WHICH ONE HAS TO BE USED
// THROTTLING -> when used for continouos action(scrolling,sizing)
// DEBOUNCING -> used for user input scenarios(search bar,form validations)



// DEBOUNCE FUNCTION

function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

function search(query){
    console.log('Searching for:',query);
}

const dsearch = debounce(search,100);

dsearch()
dsearch('hello');

setTimeout(dsearch,500)
dsearch('heeeeeeeeeeeeeeee')


let data = document.getElementById('searchInput');

data.addEventListener('input',(event)=>{
    dsearch(event.target.value);
});

// let timestamp = Date.now();
// let date = new Date(timestamp)
// console.log(date)


// JS THROTTLING -> used to limit the number of times a function can be executed in a given time frame
// by throttling fn -> ensure it execute at controlled rate -> reducing resource consumption and improve responsiveness

// function throttle(fn,delay){

//     let lastTime = 0     // keep track for last execution time
//     return function(...args){
//         let now =Date.now();
//         if(now-lastTime>=delay){
//             fn(...args);
//             lastTime = now;
//         }
//     }
// }

// HOW IT WORKS
// 1) FN trig multiple time due to event->throt ensure that fn execute only once within the defined interval
// -> any additional triger during the interval ignored until next cycle start->once interval over -> fn execute again if triggered


// 1) RESIZE THE WINDOW

function throttle(fn,delay){
   let prevT = 0;
   return function(...args){
     let now = Date.now();
     if(now-prevT>=delay){
        fn(...args);
        prevT = now;
     }
   }
}


// 1) RESIZE W/O THROTT AND DEBOUNCE
// function print(){
//      console.log('resize event trigger without thrott')
// }
// window.addEventListener('resize',print)


// 2) RESIZE WITH THROTT (prefered one for resize -> provide interactive user exp )
// window.addEventListener('resize',throttle(()=>{
//     console.log('resize event trigger with thrott')
// },500))


// 3) RESIZE WITH DEBOUNCE
window.addEventListener('resize',debounce(()=>{
     console.log('resize event trigger with debounce')
},500))


// 2) SCROLLING THE WINDOW


// a) without thrott and debounce

// function show(){
//     console.log('scrolling w/o thrott and debounce')
// }

// window.addEventListener('scroll',show);


// b) with thrott

// window.addEventListener('scroll',throttle(()=>{
//     console.log('scrolling with thrott ')
// },500))

// c) with debounce

window.addEventListener('scroll',debounce(()=>{
    console.log('scrolling with debounce ')
},500))



