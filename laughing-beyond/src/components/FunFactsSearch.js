import React from 'react'
import Select from 'react-select'

const searchType = [
    {label: "Trivia", value: "trivia"},
    {label: "Math", value: "math"},
    {label: "Date", value: "date"},
    {label: "Year", value: "year"}
]

const FunFactsSearch = (props) => {
    
    
        return (
            <div className='factsSearch'>
                <form onSubmit={props.handleSubmit}>
                {/* <Select options={searchType} /> */}
                    {/* <label> */}
                      
                    {/* </label>  */}
                  
{/*                     
                    <label></label>
                    <input type='integer' name='value' />
                    <label></label>
                    <input type="date" name='date'/>
                    <input type="" name='year'/> */}
                </form>
                <select value={props.type} name="type" type="dropdown" onChange={props.handleChange}>
                            
                            <option value="trivia">Trivia</option>
                            <option value="math">Math</option>
                            <option value="date">Date</option>
                            <option value="year">Year</option>
                        </select>
                        {/* <input type="submit" value="Submit" /> */}
            </div>
        )
    }


export default FunFactsSearch