
import { useMemo, useState } from "react"

function ChildComponent({userInfo}){
    console.log('child componnet render')
    return <p>User:{userInfo.name}</p>
}

function ParentComponet(){
    const [count,setCount] = useState(0);

    //const userInfo ={name:'gfg'}
    const userInfo = useMemo(()=>({name:'gfg'}),[])

    return(
        <div>
            <p>Count: {count}</p>
            <ChildComponent userInfo={userInfo}/>
            <button onClick={()=>setCount(count+3)}>incremnt</button>
        </div>
    )
}

export default ParentComponet