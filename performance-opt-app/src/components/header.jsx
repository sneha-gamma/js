import React from "react"

const Header = (props)=>{
    console.log('rendering header')
    return <div>{props.title}</div>
}

export default React.memo(Header)