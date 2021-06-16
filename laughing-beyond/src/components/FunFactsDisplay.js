import React, { Component } from 'react'
import axios from 'axios'

class FunFactsDisplay extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            funFact: ''
        }
     
    }
   

    componentDidMount = () => {
        axios.get('http://numbersapi.com/random?min=0&max=1000')
        .then(resp => {
            console.log(resp.data)
            this.setState({
                funFact: resp.data,
            })
        })
    }

    render() {
        const funFact = this.state.funFact
        return (
            <div id='funFacts'>
                <h3>Fun Facts with Numbers</h3>
                    <div className='funFact'>
                        <p>{funFact}</p>

                    </div>
                    <button><a onClick={() => {window.location.href="/funfacts"}}>New Fun Fact</a></button>
            </div>
        )
 
                
        
    }

   
}



export default FunFactsDisplay