import React, { Component } from 'react'
import JokeButton from './JokeButton'

class Joke extends Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: props.joke,
            display: false
        }
    }

handleClick = (event) => {
    event.preventDefault()
    this.setState(prevState=> ({
        ...prevState, 
        display: !this.state.display
    }))
}
    render() {
        const joke = this.state.joke
        const display = this.state.display
        return (
            <div className='joke'>
                <div className='setup'>
                    <p>#{joke.id}</p>
                    <p>{joke.setup}</p>
                </div>
                <div className='punchline'>
                    {display &&
                    <p>{joke.punchline}</p>
                }
                </div>
                <JokeButton display={display} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default Joke