import axios from 'axios'
import React, { useState, useEffect } from 'react'
import JokesSearch from './JokesSearch'
import Joke from './Joke'

const JokesDisplay = () => {
    const [data, setData] = useState({
        jokes: [],
        type: 'random',
        allDisplay: false
    })

    const fetchData = (inputType) => {
        inputType === 'random' ?
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
        .then(resp => {
            const allJokes = resp.data
            allJokes.forEach(joke => {
            joke.display = false;
            })
            setData(prevState=>({
                ...prevState,
                jokes: allJokes,
            }))
        })
        :
        axios.get(`https://official-joke-api.appspot.com/jokes/${inputType}/ten`)
        .then(resp => {
            const allJokes = resp.data
            allJokes.forEach(joke => {
            joke.display = false;
            })
            setData(prevState=>({
                ...prevState,
                jokes: allJokes,
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
        setData(prevState=>({
            ...prevState,
            display: false,
            allDisplay: false
        }))
        fetchData(data.type)
        console.log(jokes)
    }

    useEffect(() => {
        fetchData(data.type)
    }, [])

    const handleHide = (event) => {
        event.preventDefault()
        const allJokes = jokes
        allJokes.forEach(joke => {
            joke.display = false;
        })
            setData(prevState=>({
                ...prevState,
                jokes: allJokes,
                allDisplay: false
            }))
    }

    const handleShow = (event) => {
        event.preventDefault()
        const allJokes = jokes
        allJokes.forEach(joke => {
            joke.display = true;
            })
            setData(prevState=>({
                ...prevState,
                jokes: allJokes,
                allDisplay: true
            }))
    }
    
    const jokes = data.jokes

    return (
        <div id='jokes'>
            <h3>Jokes</h3>
            <JokesSearch 
            type={data.type} 
            allDisplay={data.allDisplay} 
            handleChange={handleChange} 
            handleRefresh={handleRefresh}
            handleHide={handleHide}
            handleShow={handleShow}
            />
            <div className='jokes'>
                {jokes.map((joke) => {
                    console.log(joke)
                    return(
                        <Joke joke={joke}/>
                    )
                })}
            </div>
        </div>
    )
}

export default JokesDisplay