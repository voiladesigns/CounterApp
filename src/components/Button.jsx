import React from "react";

export const Button =({onYesClick, onNoClick})=>{
    return(
        <div style={{display:'flex', marginBottom:'20px'}}>
        <button onClick={onYesClick}>Yes</button>
        <button onClick={onNoClick}>No</button>
        </div>

    )
}