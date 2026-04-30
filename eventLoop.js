
console.log('1. Start (sync)')

// Macrotask: Scheduled for the callback queue
setTimeout(()=>{
    console.log('5. Timeout (Macrotask)')
},0);

// Microtask: scheduled for the microtask queue
Promise.resolve().then(()=>{
    console.log('3. Promise(microtask)');
}).then(()=>{
    console.log('4. Second Promise(microtask)');
});

console.log('2. End (sync)')