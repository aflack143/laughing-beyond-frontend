import React, { Component, useEffect, useReducer, useState } from 'react'
import JokeButton from './JokeButton'

const Joke = (props) => {

    const [joke, setJoke] = useState(props.joke)
    const [display, setDisplay] = useState(props.display)

    const handleClick = (event) => {
        event.preventDefault()
        setDisplay(!display)
    }
      
    useEffect(() => {setJoke(props.joke)}, [props.joke])
    
    return (
        <div className='joke' key={props.display!==display}>
            <div className='setup'>
                <p>{joke.setup}</p>
            </div>
            <div className='punchline'>
                {display &&
                <p id='punchline'>{joke.punchline}</p>
                }
            </div>
            <JokeButton display={display} handleClick={handleClick}/>
        </div>
    )
}

export default Joke