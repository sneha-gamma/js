import { useCallback, useState } from "react"


export const CallBackEx = ()=>{

    const funcSet = new Set();

    const[prev,setPrev] = useState(0)
    const[num,setNum] = useState(0)

    // const incPrev = ()=>{
    //     setPrev(prev+1)
    // }

    const incPrev = useCallback(()=>setPrev(prev+1),[prev])
    const decPrev = useCallback(()=>setPrev(prev-1),[prev])
    const incNum = useCallback(()=>setNum(num+1),[num])

    // const decPrev = ()=>{
    //     setPrev(prev-1)
    // }

    // const incNum = ()=>{
    //     setNum(num+1)
    // }

    funcSet.add(incPrev)
    funcSet.add(decPrev)
    funcSet.add(incNum)
    alert(funcSet.size)

    return(
        <div>
            <h2> without useCallback</h2>
            <p>Count:{prev}</p>
            <button onClick={incPrev}>Increment counter</button>
            <button onClick={decPrev}>Dec </button>
            <button onChangeCapture={incNum}>IncNum</button>
        </div>
    )

}