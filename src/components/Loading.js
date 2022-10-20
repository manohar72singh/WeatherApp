import React from 'react'
import '../css/Loading.css'
function Loading(){
    return(
        <>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Loading