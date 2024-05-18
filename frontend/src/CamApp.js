
import "./Styles/CamApp.css"

import Light from "./Components/Light"
import Stream from "./Components/Stream";

function CamApp(){
    
    return(
        <>
        <section className="CA-Cont">
            <div className='CA-Menu'>
                <div className="LED-Togg">
                    <p>LED</p>
                    <Light/>
                    
                </div>
                <Stream/>
                
            </div>
            <div className="CA-Vid">
                <p>Hello</p>
            </div>
        </section>
        </>
    )
}

export default CamApp