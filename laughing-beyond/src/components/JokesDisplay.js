import axios from 'axios'
import React, { useState, useEffect } from 'react'
import JokesSearch from './JokesSearch'
import Joke from './Joke'

const JokesDisplay = () => {
    const [data, setData] = useState({
        jokes: [],
        type: 'random'
    })

    const fetchData = (inputType) => {
        inputType === 'random' ?
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(resp => {
            console.log(resp.data)
            setData(prevState=>({
                ...prevState,
                jokes: resp.data,
            }))
        })
        :
        axios.get(`https://official-joke-api.appspot.com/jokes/${inputType}/ten`)
        .then(resp => {
            console.log(resp.data)
            setData(prevState=>({
                ...prevState,
                jokes: resp.data,
            }))
        })
    }

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

    useEffect(() => {
        fetchData(data.type)
    }, [])
    
    const jokes = data.jokes

    return (
        <div id='jokes'>
            <h3>Jokes</h3>
            <JokesSearch type={data.type} handleChange={handleChange}/>
            <div className='jokes'>
                {jokes.map((joke) => {
                    return(
                        <Joke joke={joke}/>
                    )
                })}

            </div>
        </div>
    )
}

export default JokesDisplay