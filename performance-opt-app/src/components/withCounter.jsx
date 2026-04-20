import { useState } from "react";

const withComponent = (WrappedComponent)=>{

    return function WithComponent(){
        const[count,setCount] = useState(0);

        const increment = ()=>setCount((prev)=>prev+1)
        const decrement = ()=>setCount((prev)=>prev-1)
        const reset = ()=>setCount(0)

        return(
            <WrappedComponent
            count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}/>
        )
    }
}

export default withComponent;