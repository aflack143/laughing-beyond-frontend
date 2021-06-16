import axios from 'axios'
// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import JokesSearch from './JokesSearch'
import JokeButton from './JokeButton'

// class JokesDisplay extends Component  {
//     constructor(props) {
//         super(props)
//         this.state = {
//             jokes: [],
//             type: 'general'
//         }
//     }
const JokesDisplay = (props) => {
    const [data, setData] = useState({
        jokes: [
            {
            display: ''
            }
        ],
        type: 'general'
    })

    const fetchData = (inputType) => {
    // componentDidMount = () => {
        inputType === 'random' ?
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(resp => {
            console.log(resp.data)
            // this.setState({
            setData(prevState=>({
                ...prevState,
                jokes: resp.data,
            }))
        })
        :
        // data.type === 'random' && 
        axios.get(`https://official-joke-api.appspot.com/jokes/${inputType}/ten`)
        .then(resp => {
            console.log(resp.data)
            // this.setState(prevState=>({
            setData(prevState=>({
                ...prevState,
                jokes: resp.data,
            }))
        })
    }

    // handleChange = (event) => {
    //     event.preventDefault()
    //     this.setState(prevState=>({
    //         ...prevState,
    //         type: event.target.value
    //     }))
    //     console.log(this.state.type)
    //     this.fetchData(this.state.type)
    // }
    const handleChange = (event) => {
        event.preventDefault()
        console.log(data.type)
        setData(prevState=>({
            ...prevState,
            type: event.target.value
        }))
        console.log(data.type)
        fetchData(event.target.value)
        console.log(data.jokes)
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     this.fetchData(data.type)
    // }

    useEffect(() => {
        fetchData(data.type)
      }, [])

    // render() {
        const jokes = data.jokes
        return (
            <div id='jokes'>
                <h3>Jokes</h3>
                <JokesSearch type={data.type} handleChange={handleChange}
                //  handleSubmit={handleSubmit}
                />
                <div className='jokes'>
                    {jokes.map((joke) => {
                        joke.push({display: false})
                        let display = false
                        return(
                            <div className='joke'>
                                <div className='setup'>
                                    <p>#{joke.id}</p>
                                    <p>{joke.setup}</p>
                                </div>
                                <JokeButton display={joke.display} />
                                <div className='punchline'>
                                    <p>{joke.punchline}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    // }
}

export default JokesDisplay