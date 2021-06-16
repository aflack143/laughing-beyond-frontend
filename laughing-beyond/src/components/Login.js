import React, {Component} from "react"
import axios from "axios"

class Login extends Component {
    constructor() {
        super()

        this.state = {
            data: {
                username:"",
                password:""
            }
        }
    }

    handleOnChange = (event) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('User Logging In')
        axios.post("http://localhost:3001/auth/login", this.state.data)
        .then(resp => {
            console.log("User Logged In")
            console.log(resp)
            this.props.history.push(`/profile/${resp.data.user.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h3>Log In</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleOnChange} type='text' name='username' placeholder='username' />
                    <input onChange={this.handleOnChange} type='password' name='password' placeholder='password' />
                    <input type='submit' value='Log In'/>
                </form>
            </div>
        )
    }
   
}

export default Login
