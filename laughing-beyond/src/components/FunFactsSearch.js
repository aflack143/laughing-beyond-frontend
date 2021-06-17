import React from 'react'


const FunFactsSearch = (props) => {
    
    
        return (
            <div className='factsSearch'>
                <form onSubmit={props.handleSubmit}>
                     <select value={props.type} name="type" type="dropdown" onChange={props.handleChange} >
                            <option  value="trivia">trivia</option>
                            <option value="math">math</option>
                            <option value="date">date</option>
                            <option value="year">year</option>
                    </select>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }


export default FunFactsSearch