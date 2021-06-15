import React from 'react'

const Signup = () => {
    return (
        <div>
            <h3>Sign Up</h3>
            <form>
                <input type='text' name='name' placeholder='enter your name' />
                <input type='email' name='email' placeholder='enter your emil address' />
                <input type='text' name='username' placeholder='create username' />
                <input type='password' name='password' placeholder='create password' />
                <input type='submit' value='Sign Up'/>
            </form>
        </div>
    )
}

export default Signup