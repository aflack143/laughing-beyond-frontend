import React from 'react'

const JokesSearch = (props) => {
    return (
        <fieldset className="jokesearch" onChange={props.handleChange}>
            <label className='radiobtn' for='general'><input className='radiobtn' type='radio' name='type' value='general' checked={props.type === 'general'}/>General</label>
            <label className='radiobtn' for='programming'> <input className='radiobtn' type='radio' name='type' value='programming' checked={props.type === 'programming'}/>Programming</label>
            <label className='radiobtn' for='knock-knock'> <input className='radiobtn' type='radio' name='type' value='knock-knock' checked={props.type === 'knock-knock'}/>Knock-Knock</label>
            <label className='radiobtn' for='random'> <input className='radiobtn' type='radio' name='type' value='random' checked={props.type === 'random'}/>Random</label>
        </fieldset>
    )
}

export default JokesSearch