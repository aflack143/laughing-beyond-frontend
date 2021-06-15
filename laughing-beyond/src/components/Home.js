import axios from 'axios'
import React, { Component } from 'react'

class Home extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            joke: [],
            funFact: props.funFacts
        }
    }

    componentDidMount = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(resp => {
            console.log(resp.data)
            this.setState({
                joke: resp.data
            })
        })
    }

    render(){
        return (
            <div>
                <h3>Home Page</h3>

            </div>
        )
    }
}

export default Home