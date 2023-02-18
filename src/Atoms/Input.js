import { type } from '@testing-library/user-event/dist/type';
import React from 'react'


function Input ({placeholder,type,onChange}){



    return (
        <>
        <input placeholder={placeholder} type={type} onChange={onChange} />
        
        
        
        
        </>

    )
}
export default Input;