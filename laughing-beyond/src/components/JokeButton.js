import React from 'react'

const JokeButton = (props) => {
  let display = props.display

    return (
        <div>
            {!display ?
                <button
                  className='jokebtn show'
                  onClick={props.handleClick}
                >Show Answer</button>
              :
                <button
                  className='jokebtn hide'
                  onClick={props.handleClick}
                >Hide Answer</button>
            }
        </div>
    )
}

export default JokeButton
