

let firstVar = 'Hello';
const iifeFn = (()=>{

    let secVar = 'world';
     
     return {
        setVar: (newVar)=>{
               secVar = newVar;
        },
        getVAr: ()=>secVar
    }

})();

console.log(firstVar);

iifeFn.setVar('duniya');
console.log(iifeFn.getVAr());