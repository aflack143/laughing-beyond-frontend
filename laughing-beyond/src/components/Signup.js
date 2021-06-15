import React, { Component } from "react"
import axios from "axios"

class Signup extends Component {
    constructor() {
        super()

        this.state = {
            data: {
                name:"",
                email:"",
                username:"",
                password:"",

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

        axios.post("http://localhost:3001/user/signup", this.state.data)
        .then(resp => {
            console.log("user created!")
            console.log(resp)
            this.props.history.push(`/profile/${resp.data.user.id}`)
        })
        .catch(err => {
            console.log(err)
        })


    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleOnChange} type='text' name='name' placeholder='enter your name' />
                    <input onChange={this.handleOnChange} type='email' name='email' placeholder='enter your emil address' />
                    <input onChange={this.handleOnChange} type='text' name='username' placeholder='create username' />
                    <input onChange={this.handleOnChange} type='password' name='password' placeholder='create password' />
                    <input type='submit' value='Sign Up'/>
                </form>
            </div>
        )
    }
 
}

export default Signup