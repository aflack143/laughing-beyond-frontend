import React, { Component } from 'react'
import axios from 'axios'
import FunFactsSearch from './FunFactsSearch'

class FunFactsDisplay extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            funFact: '',
            type: "trivia",
            selectedOption: null

        }
    }
   
    // componentDidMount = () => {
    //     axios.get('http://numbersapi.com/random?min=0&max=1000')
    //     .then(resp => {
    //         console.log(resp.data)
    //         this.setState({
    //             funFact: resp.data,
    //         })
    //     })
    // }
    
    fetchData = (inputValue) => {
        axios.get(`http://numbersapi.com/#random/${inputValue}`)
        .then(resp => {
            console.log(resp.data)
        })
    }

    handleChange(event) {
        event.persist()
        this.setState(prevState=>({
            ...prevState,

          type: event.target.value
            
        }))
      console.log(this.state.type)
    }

    handleSubmit(event) {
        // alert('here are your options' + this.state.value);
        event.preventDefault();
        console.log(this.state.type)
        this.fetchData()
    }

    render() {
        const funFact = this.state.funFact
        console.log(this.state.type)
        return (
            <div id='funFacts'>
                <h3>Fun Facts with Numbers</h3>
                <div>
                    <div className='factcontainter'>
                        <p className='funFact'>{funFact}</p>
                        <button><a onClick={() => {window.location.href="/funfacts"}}>New Fun Fact</a></button>
                    </div>
                    <FunFactsSearch value={this.state.type} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                </div>
            </div>
        ) 
    }
}



export default FunFactsDisplay