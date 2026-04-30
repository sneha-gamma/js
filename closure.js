

const outerVar = ()=>{
    let count = 0;

    return function innerVar(){
        count++
      return count;
    }

}

const counter = outerVar();
console.log(counter());
console.log(counter());
console.log(counter());
