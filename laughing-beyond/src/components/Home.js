import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            joke: [],
            funFact: ''
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
        axios.get('http://numbersapi.com/random?min=0&max=1000')
        .then(resp => {
            this.setState({
                funFact: resp.data,
            })
        })
    }

    render(){
        const joke = this.state.joke
        return (
            <div>
                <h3>Home Page</h3>
                <div className="home-joke">
                    <div>
                        <p>#{joke.id}</p>
                        <p>{joke.setup}</p>
                        <p>{joke.punchline}</p>
                    </div>
                    <button><Link to='/jokes'>Click for more jokes</Link></button>
                </div>
                <div className="home-fact">
                    <p>{this.state.funFact}</p>
                    <button><Link to='/funfacts'>Click for more fun facts</Link></button>
                </div>
              </div>
        )
    }
}

export default Home