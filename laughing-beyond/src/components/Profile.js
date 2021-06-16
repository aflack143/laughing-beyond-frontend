import React, { Component } from 'react'
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile