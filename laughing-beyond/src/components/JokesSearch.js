import React from 'react'

const JokesSearch = (props) => {
    return (
        <div>
            {/* <form onSubmit={props.handleSubmit}>
                <label for={props.type}>Type of Joke:
                <input onChange={props.handleChange} type='radio' name='type' value='General'>General</input>
                <input onChange={props.handleChange} type='radio' name='type' value='Programming'>Programming</input>
                <input onChange={props.handleChange} type='radio' name='type' value='Knock-Knock'>Knock-Knock</input>
                <input onChange={props.handleChange} type='radio' name='type' value='Random'>Random</input>
                <input type='submit' value='Search'/>
                </label>
            </form>
        </div> */}
            <fieldset onChange={props.handleChange}>
                <label for='general'><input type='radio' name='type' value='general' checked={props.type === 'general'}/>General</label>
                <label for='programming'> <input type='radio' name='type' value='programming' checked={props.type === 'programming'}/>Programming</label>
                <label for='knock-knock'> <input type='radio' name='type' value='knock-knock' checked={props.type === 'knock-knock'}/>Knock-Knock</label>
                <label for='random'> <input type='radio' name='type' value='random' checked={props.type === 'random'}/>Random</label>
            </fieldset>
    </div>
    )
}

export default JokesSearch