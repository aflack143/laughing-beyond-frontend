import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Boop from "./Boop"

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

    // handleClick = (input) => {
    //     input === 'jokes' ?
    //     <Link to='/jokes'/>
    //     :
    //     <Link to='/funfacts'/>
    // }

    render(){
        const joke = this.state.joke
        return (
            <div id="home">
                <h3>Home Page</h3>
                <div className="home-container1">
                    <div className='home-joke home-content'>
                        <p>{joke.setup}</p>
                        <p>{joke.punchline}</p>
                    </div>
                    <div className='home-btn'>
                    <Boop rotation={720} timing={3000}>
                        <button><Link to='/jokes'>Click for more Jokes</Link></button>
                        </Boop>
                    </div>
                </div>
                <div className="home-container2">
                    <div className='home-fact home-content'>
                        <p>{this.state.funFact}</p>
                    </div>
                    <div className='home-btn'>
                    <Boop rotation={720} timing={3000}>
                        <button><Link to='/funfacts'>Click for more Fun Facts</Link></button>
                        </Boop>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home