import React from 'react';
import './Style.css'

const userOutput = (props) => {
    return (
        <div className='container'>
           <p>Hi, <strong>{props.name}</strong> this is my first solo project</p>
            <p>How am I doing so far?</p> 
        </div>
    )
}

export default userOutput;