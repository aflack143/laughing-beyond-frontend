import React from 'react'

const JokesSearch = (props) => {
    return (
        <div id="jokesearch">
            {props.allDisplay ?
            <button id='hide-btn' onClick={(evt) => props.handleHide(evt, false)}>Hide All Answers</button>
            :
            <button id='show-btn' onClick={(evt) => props.handleShow(evt, true)}>Show All Answers</button>
            }
            <fieldset className="jokesearch" onChange={props.handleChange}>
                <label className='radiobtn' for='general'><input className='radiobtn' type='radio' name='type' value='general' checked={props.type === 'general'}/>General</label>
                <label className='radiobtn' for='programming'> <input className='radiobtn' type='radio' name='type' value='programming' checked={props.type === 'programming'}/>Programming</label>
                <label className='radiobtn' for='knock-knock'> <input className='radiobtn' type='radio' name='type' value='knock-knock' checked={props.type === 'knock-knock'}/>Knock-Knock</label>
                <label className='radiobtn' for='random'> <input className='radiobtn' type='radio' name='type' value='random' checked={props.type === 'random'}/>Random</label>
            </fieldset>
            <button id='refreshbtn' onClick={props.handleRefresh}>Refresh Jokes</button>
        </div>
    )
}

export default JokesSearch
