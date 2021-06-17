import React from 'react'

const JokeButton = (props) => {
let display = props.display

    return (
        <div>
            {!display ?
            <button onClick={props.handleClick}>Show Answer</button>
            :
            <button onClick={props.handleClick}>Hide Answer</button>
            }
        </div>
    )
}

export default JokeButton