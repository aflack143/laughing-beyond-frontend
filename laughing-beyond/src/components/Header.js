import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <h1>Laughing & Beyond</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/jokes'>Jokes</Link>
                <Link to='/funfacts'>Fun Facts</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
        </header>
    )
}

export default Header