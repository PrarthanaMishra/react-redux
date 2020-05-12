import React from 'react';
import stylesWrapper from './../HOC/wrapper';

const ButtonOne = (props)=>{
    return (
        <button style={props.styles}>I m button one </button>
    )
}
export default stylesWrapper(ButtonOne);