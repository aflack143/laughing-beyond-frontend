import React, { Component } from 'react'
import EditProfile from "./EditProfile"
import axios from 'axios'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '',
                email: '',
                username: '',
                img: '',
            }
        }
    }

    componentDidMount = (id) => {
        axios.get(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.setState({
                user: resp.data
            })
            console.log(this.state.user)
        })
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit =(event) => {
        event.preventDefault()

        axios.put(`http://localhost:3001/user/profile/${this.props.match.params.id}`, this.state.user)
        .then(resp => {
            console.log("Editing Profile")
        })
    }

    handleDelete = async (event) => {
        event.preventDefault()

        await axios.delete(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then (() => {
            console.log("Deleting Profile");
            this.props.history.push('/home')
        })
    }

    render() {
        const user = this.state.user
        return (
            <div>
                <h3>Profile</h3>
                <div>
                    <img src={user.img}/>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.username}</p>
                        <EditProfile user={user} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile