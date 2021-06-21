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
      const url =
        (inputType === 'random')
          ? 'https://official-joke-api.appspot.com/jokes/ten'
          : `https://official-joke-api.appspot.com/jokes/${inputType}/ten`
      axios.get(url)
        .then(resp => {
          const allJokes = resp.data;
          const updatedJokes = allJokes.map(joke => {
            return { display: false, ...joke }
          })
          setData({ jokes: updatedJokes, type: 'random', allDisplay: false })
        })
    }

    const handleChange = (event) => {
        event.preventDefault()
        setData(prevState=>({
            ...prevState,
            type: event.target.value,
            // display: false
        }))
        fetchData(event.target.value)
    }

    const handleRefresh = (event) => {
      fetchData(data.type)
    }

    useEffect(() => {
        fetchData(data.type)
    }, [])

    const handleClick = (event, type) => {
      event.preventDefault();

      const updatedJokes = data.jokes.map(joke => {
        joke.display = type;
        return joke
      })
      console.log(updatedJokes)
      setData({
        jokes: updatedJokes,
        allDisplay: type
      })
    }

    const handleShowClick = (evt, id) => {
      evt.preventDefault();

      const updatedJokes = data.jokes.map(joke => {
        joke.display = joke.id === id ? !joke.display : joke.display
        return joke;
      })

      setData({
        jokes: updatedJokes,
        allDisplay: data.allDisplay,
        type: data.type
      })
    }

    console.log(data.jokes)

    return (
        <div id='jokes'>
            <h3>Jokes</h3>
            <JokesSearch
              type={data.type}
              allDisplay={data.allDisplay}
              handleChange={handleChange}
              handleRefresh={handleRefresh}
              handleHide={handleClick}
              handleShow={handleClick}
            />
            <div className='jokes'>
                { data.jokes.map((joke) => <Joke joke={joke} key={joke.id} handleClick={handleShowClick} /> ) }
            </div>
        </div>
    )
}

export default JokesDisplay
