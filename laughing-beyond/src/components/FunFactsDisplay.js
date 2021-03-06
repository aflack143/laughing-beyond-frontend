import React, { Component } from 'react'
import axios from 'axios'
import FunFactsSearch from './FunFactsSearch'

class FunFactsDisplay extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            funFact: '',
            type: "trivia",
            display: false

        }
    }
   
    componentDidMount = () => {
        axios.get('http://numbersapi.com/random?min=0&max=1000')
        .then(resp => {
            this.setState({
                funFact: resp.data,
            })
        })
    }
    
    fetchData = (inputValue) => {
        axios.get(`http://numbersapi.com/random/${inputValue}`)
        .then(resp => {
            this.setState({
                funFact: resp.data,
            })
        })
    }
    
    handleChange = (event) => {
        event.persist()
        this.setState(prevState=>({
            ...prevState,
          type: event.target.value   
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchData(this.state.type)
    }

    render() {
        return (
            <div id='funFacts'>
                <div id='ffcontainer'>
                    <div className='factcontainter'>
                        <div className='factbox'>
                            <h3>Fun Facts with Numbers</h3>
                            <p className='funFact'>{this.state.funFact}</p>
                        </div>
                        <div className='searchbox'>
                            <div className='factrefresh'>
                                <button>
                                    <a onClick={this.handleSubmit}>New Fun Fact</a>
                                </button>
                            </div>
                            <div className='factsearch'>
                                <FunFactsSearch 
                                    display={this.state.display} 
                                    type={this.state.type}
                                    handleChange={this.handleChange} 
                                    handleSubmit={this.handleSubmit}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}



export default FunFactsDisplay