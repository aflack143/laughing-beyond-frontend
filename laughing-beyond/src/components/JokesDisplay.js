import axios from 'axios'
import React, { Component } from 'react'

class JokesDisplay extends Component  {
    constructor() {
        super()
        this.state = {
            jokes: []
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
        return (
            <div>
                <h3>Jokes</h3>
            </div>
        )
    }
}

export default JokesDisplay