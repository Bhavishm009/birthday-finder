import React from 'react'


function Button ({Text,onClick,style,label}){

    return (
        <>
        
        <button  style={style} onClick={onClick}>{Text}</button>
        <label>{label}</label>
        
        </>
    )
}
export default Button;