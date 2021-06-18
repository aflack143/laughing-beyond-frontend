import axios from 'axios'
import React, { useState, useEffect } from 'react'
import JokesSearch from './JokesSearch'
import Joke from './Joke'

const JokesDisplay = () => {
    const [data, setData] = useState({
        jokes: [],
        type: 'random',
        display: false
    })

    const fetchData = (inputType) => {
        inputType === 'random' ?
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(resp => {
            setData(prevState=>({
                ...prevState,
                jokes: resp.data,
                display: false
            }))
        })
        :
        axios.get(`https://official-joke-api.appspot.com/jokes/${inputType}/ten`)
        .then(resp => {
            setData(prevState=>({
                ...prevState,
                jokes: resp.data,
                display: false
            }))
        })
    }

    const handleChange = (event) => {
        event.preventDefault()
        setData(prevState=>({
            ...prevState,
            type: event.target.value,
            display: false
        }))
        fetchData(event.target.value)
    }

    const handleRefresh = (event) => {
        event.preventDefault()
        fetchData(data.type)
    }

    useEffect(() => {
        fetchData(data.type)
    }, [])
    
    const jokes = data.jokes

    return (
        <div id='jokes'>
            <h3>Jokes</h3>
            <JokesSearch type={data.type} handleChange={handleChange} handleRefresh={handleRefresh}/>
            <div className='jokes'>
                {jokes.map((joke) => {
                    console.log(joke)
                    return(
                        <Joke joke={joke} display={data.display}/>
                    )
                })}
            </div>
        </div>
    )
}

export default JokesDisplay