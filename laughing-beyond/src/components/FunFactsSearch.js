import React, { useState } from 'react'


const FunFactsSearch = (props) => {
    
const [display, setDisplay] = useState(props.display)
   const handleClick = (event) => {
       event.preventDefault();
       setDisplay(!display)
   } 
        return (
            <div>
            {!display ?
                <div id='searchContainer'>
                    <button className='searchbtn' onClick={handleClick}>Show Search</button>
                </div>
            :
                <div id='searchContainer'>
                    <button className='searchbtn' onClick={handleClick}>Hide Search</button>
                    <form id='searchform' onSubmit={props.handleSubmit}>
                        <select value={props.type} name="type" type="dropdown" onChange={props.handleChange} >
                                <option  value="trivia">Trivia</option>
                                <option value="math">Math</option>
                                <option value="date">Date</option>
                                <option value="year">Year</option>
                        </select>
                            <input type="submit" value="Search"/>
                    </form>
                </div>
            }
            </div>

        )
    }


export default FunFactsSearch