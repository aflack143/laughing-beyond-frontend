import React from 'react'

const Login = () => {
    return (
        <div>
            <h3>Log In</h3>
            <form>
                <input type='text' name='username' placeholder='create username' />
                <input type='password' name='password' placeholder='create password' />
                <input type='submit' value='Log In'/>
            </form>
        </div>
    )
}

export default Login