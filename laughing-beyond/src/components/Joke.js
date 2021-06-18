import React, { Component, useEffect, useReducer, useState } from 'react'
import JokeButton from './JokeButton'

const Joke = (props) => {

    const [joke, setJoke] = useState(props.joke)
    // const [display, setDisplay] = useState(props.display)

    const handleClick = (event) => {
        event.preventDefault()
        setJoke(prevState=>({
            ...prevState,
            display: !joke.display}))
        console.log(joke)
    }
      
    useEffect(() => {setJoke(props.joke)}, [props.joke])
    
    return (
        <div className='joke' key={props.joke.display!==joke.display}>
            <div className='setup'>
                <p>{joke.setup}</p>
            </div>
            <div className='punchline'>
                {joke.display &&
                <p id='punchline'>{joke.punchline}</p>
                }
            </div>
            <JokeButton display={joke.display} handleClick={handleClick}/>
        </div>
    )
}

export default Joke