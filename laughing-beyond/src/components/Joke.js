import React, { Component, useEffect, useState } from 'react'
import JokeButton from './JokeButton'

const Joke = (props) => {

    const [joke, setJoke] = useState(props.joke)
    const [display, setDisplay] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()
        setDisplay(!display)
    }
      
    useEffect(() => {setJoke(props.joke)}, [props.joke])
    
    return (
        <div className='joke' key={props.joke<joke}>
            <div className='jokeid'>
                <p>#{joke.id}</p>
            </div>
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