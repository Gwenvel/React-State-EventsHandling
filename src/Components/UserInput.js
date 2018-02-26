import React from 'react';
import './Style.css'

const userInput = (props) => {
    return (
        <div>
            <input className='input' type='text' onChange={props.changed} value={props.name}/>
        </div>
    )

};

export default userInput;