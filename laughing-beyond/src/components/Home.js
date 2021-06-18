import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Hover from "./Hover"

class Home extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            joke: [],
            funFact: '',
            display: false
        }
    }

    componentDidMount = () => {
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(resp => {
            console.log(resp.data)
            this.setState({
                joke: resp.data,
                display: false
            })
        })
        axios.get('http://numbersapi.com/random?min=0&max=1000')
        .then(resp => {
            this.setState({
                funFact: resp.data,
                display: false
            })
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('before click')
        this.setState({
            display: !this.state.display})
        console.log('after click')
    }

    render(){
        const joke = this.state.joke
        return (
            <div id="home">
                <h3>Welcome!</h3>
                <div className="home-container1">
                    <div className='home-joke home-content'>
                        <p>{joke.setup}</p>
                        {this.state.display ?
                        <p id='homePunchline'>{joke.punchline}</p>
                        :
                        <button onClick={this.handleClick}>Show Answer</button>
                        }
                    </div>
                    <div className='home-btn'>
                    <Hover rotation={720} timing={2000}>
                       <Link to='/jokes'>
                            <button>
                                Click for more Jokes
                            </button>
                        </Link>
                    </Hover>
                    </div>
                </div>
                <div className="home-container2">
                    <div className='home-fact home-content'>
                        <p>{this.state.funFact}</p>
                    </div>
                    <div className='home-btn'>
                    <Hover rotation={-720} timing={2000}>
                        <Link to='/funfacts'>
                            <button>
                                Click for more Fun Facts
                            </button>
                        </Link>
                    </Hover>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home