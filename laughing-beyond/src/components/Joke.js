import React, { Component, useEffect, useReducer, useState } from 'react'
import JokeButton from './JokeButton'

const Joke = (props) => {
  console.log(props);
    return (
        <div className='joke'>
            <div className='setup'>
                <p>{props.joke.setup}</p>
            </div>
            <div className='punchline'>
                {props.joke.display &&
                <p id='punchline'>{props.joke.punchline}</p>
                }
            </div>
            <JokeButton display={props.joke.display} handleClick={(evt) => props.handleClick(evt, props.joke.id)}/>
        </div>
    )
}

export default Joke
