import axios from 'axios'
import React, { Component } from 'react'

class JokesDisplay extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            type: ''
        }
    }

    componentDidMount = () => {
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(resp => {
            console.log(resp.data)
            this.setState({
                jokes: resp.data
            })
        })
    }

    render() {
        const jokes = this.state.jokes
        return (
            <div>
                <h3>Jokes</h3>
                <div className='jokes'>
                    {jokes.map((joke) => {
                        return(
                            <div className='joke'>
                                <p>#{joke.id}</p>
                                <p>{joke.setup}</p>
                                <p>{joke.punchline}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default JokesDisplay