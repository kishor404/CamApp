import { useState } from "react";
import "../Styles/Hox.css"

const Stream=()=>{

    const [stream,setstream]=useState("Start")

    const streamClick=()=>{
        if(stream==="Start"){
            handleSubmit(1)
            setstream("Stop")
        }else if(stream==="Stop"){
            setstream("Start")
            handleSubmit(0)
        }
    }
    
    const handleSubmit = async (data) => {
        const Data={"Stream":data}
        try {
          const response = await fetch('http://localhost:7777/cam', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const responseData = await response.json();
          console.log('Response:', responseData);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };


    return(
        <>
            
            <button className="Hox-Button2" onClick={streamClick}>{stream}</button>
        </>
    )
}

export default Stream;