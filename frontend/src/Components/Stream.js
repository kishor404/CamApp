import { useState } from "react";
import "../Styles/Hox.css"

const Stream=()=>{

    const [stream,setstream]=useState("Start")

    const streamClick=()=>{
        if(stream==="Start"){
            setstream("Stop")
        }else if(stream==="Stop"){
            setstream("Start")
        }
    }

    return(
        <>
            
            <button className="Hox-Button2" onClick={streamClick}>{stream}</button>
        </>
    )
}

export default Stream;