import React, { useState } from 'react'


const FunFactsSearch = (props) => {
    
const [display, setDisplay] = useState(props.display)
   const handleClick = (event) => {
       event.preventDefault();
       setDisplay(!display)
   } 
        return (
            <div className='factsSearch'>
            {!display ?
                <button onClick={handleClick}>Show Search</button>
            :
            <div>
                <button onClick={handleClick}>Hide Search</button>
                <form onSubmit={props.handleSubmit}>
                     <select value={props.type} name="type" type="dropdown" onChange={props.handleChange} >
                            <option  value="trivia">trivia</option>
                            <option value="math">math</option>
                            <option value="date">date</option>
                            <option value="year">year</option>
                    </select>
                        <input type="submit" value="Search"/>
                </form>
                </div>
            }
            </div>

        )
    }


export default FunFactsSearch